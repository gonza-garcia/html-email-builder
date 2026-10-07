// Email-block sanitizer: reports invalid expressions (the Add gate signal) and
// can produce a sanitized copy (export option).
//
// Design notes (parser differential, T3.4a):
// - This module PARSES with the browser HTML parser (DOMParser, inert) and
//   SANITIZES with DOMPurify (allowlist sanitizer hardened against mutation
//   XSS). The live preview renders through html-react-parser and the export is
//   a raw string re-parsed by each email client; the three parsers can disagree
//   on pathological markup. The lint below is authoritative for the gate and
//   the DOMPurify output is authoritative for the "sanitized copy" export.
// - vs. the jitbit upstream this file used to fork: the hand-rolled DOM rebuild
//   walk was replaced with DOMPurify; the email allowlists below are kept and
//   tightened (see docs/email-client-guidelines.md).
// - Blocks are <tr>/<td> fragments, so both passes parse inside a table shell
//   (same reason the caller wraps code in tableWrapper).

import DOMPurify from 'dompurify';
import cssParser from 'css';

type SanitizeResult = {
  invalidNodes: string[];
  result: string | undefined;
};

const PARSE_SHELL_TOP = '<table><tbody>';
const PARSE_SHELL_BOTTOM = '</tbody></table>';

class Sanitizer {
  tagWhitelist_: Record<string, boolean>;
  contentTagWhiteList_: Record<string, boolean>;
  attributeWhitelist_: Record<string, boolean>;
  cssWhitelist_: Record<string, boolean>;
  schemaWhiteList_: string[];
  uriAttributes_: Record<string, boolean>;

  constructor() {
    this.tagWhitelist_ = {
      A: true,
      ABBR: true,
      B: true,
      BLOCKQUOTE: true,
      BODY: true,
      BR: true,
      CENTER: true,
      CODE: true,
      DIV: true,
      EM: true,
      FONT: true,
      H1: true,
      H2: true,
      H3: true,
      H4: true,
      H5: true,
      H6: true,
      HR: true,
      I: true,
      IMG: true,
      LABEL: true,
      LI: true,
      OL: true,
      P: true,
      PRE: true,
      SMALL: true,
      SOURCE: true,
      SPAN: true,
      STRONG: true,
      TABLE: true,
      TBODY: true,
      TR: true,
      TD: true,
      TH: true,
      THEAD: true,
      UL: true,
      U: true,
      VIDEO: true,
    };

    this.contentTagWhiteList_ = { FORM: true }; //tolerated by the lint but dropped from the copy (forms are invalid in email HTML)

    this.attributeWhitelist_ = {
      align: true,
      color: true,
      controls: true,
      height: true,
      href: true,
      src: true,
      alt: true,
      style: true,
      target: true,
      title: true,
      type: true,
      width: true,
      bgcolor: true,
      valign: true,
      role: true,
      cellspacing: true,
      cellpadding: true,
      border: true,
      class: true,
    };

    this.cssWhitelist_ = {
      display: true,
      'line-height': true,
      'font-family': true,
      color: true,
      'background-color': true,
      'font-size': true,
      'text-align': true,
      'font-weight': true,
      padding: true,
      'padding-top': true,
      'padding-right': true,
      'padding-bottom': true,
      'padding-left': true,
      margin: true,
      'margin-top': true,
      'margin-right': true,
      'margin-bottom': true,
      'margin-left': true,
      border: true,
      'border-top': true,
      'border-right': true,
      'border-bottom': true,
      'border-left': true,
      'border-top-width': true,
      'border-top-style': true,
      'border-top-color': true,
      'border-right-width': true,
      'border-right-style': true,
      'border-right-color': true,
      'border-bottom-width': true,
      'border-bottom-style': true,
      'border-bottom-color': true,
      'border-left-width': true,
      'border-left-style': true,
      'border-left-color': true,
      'border-image': true,
      'border-image-source': true,
      'border-image-slice': true,
      'border-image-width': true,
      'border-image-outset': true,
      'border-image-repeat': true,
      'text-decoration': true,
      'text-decoration-line': true,
      'text-decoration-style': true,
      'text-decoration-color': true,
      '-webkit-border-radius': true,
      '-moz-border-radius': true,
      'border-radius': true,
      'border-top-left-radius': true,
      'border-top-right-radius': true,
      'border-bottom-right-radius': true,
      'border-bottom-left-radius': true,
      width: true,
      'letter-spacing': true,
      'text-decoration-thickness': true,
    };

    //which "protocols" are allowed in "href", "src" etc
    //NOTE: tightened vs the jitbit upstream list (http, https, data, m-files,
    //file, ftp). This tool's output is EMAIL html (see
    //docs/email-client-guidelines.md): links are plain web or mailto URLs, so
    //only those three schemes pass. data:/file:/ftp:/m-files: are rejected too.
    this.schemaWhiteList_ = ['http:', 'https:', 'mailto:'];

    this.uriAttributes_ = { href: true, action: true, src: true };
  }

  sanitizeHtml(input: string): SanitizeResult {
    const invalidNodes: string[] = [];

    const trimmed = input.trim();
    if (trimmed === '') return { invalidNodes: [], result: '' };
    if (trimmed === '<br>') return { invalidNodes: [], result: '' };

    const wrapped = PARSE_SHELL_TOP + trimmed + PARSE_SHELL_BOTTOM;

    //1. lint pass: report everything the email allowlists reject. DOMParser is
    //inert (no script execution, no resource loads).
    const doc = new DOMParser().parseFromString(wrapped, 'text/html');
    this.lintNode(doc.body, invalidNodes);

    //2. sanitize pass: DOMPurify produces the sanitized copy with the same
    //allowlists (minus FORM, which is invalid in email HTML).
    const purifyConfig = {
      ALLOWED_TAGS: Object.keys(this.tagWhitelist_).map((t) => t.toLowerCase()),
      ALLOWED_ATTR: Object.keys(this.attributeWhitelist_),
      ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))/i,
    };

    const styleFilter = (
      _node: Element,
      data: { attrName: string; attrValue: string; keepAttr: boolean },
    ) => {
      if (data.attrName !== 'style') return;
      const filtered = this.filterStyleValue(data.attrValue);
      if (filtered === undefined) {
        data.keepAttr = false;
      } else {
        data.attrValue = filtered;
      }
    };
    DOMPurify.addHook('uponSanitizeAttribute', styleFilter);
    let cleaned: HTMLElement;
    try {
      cleaned = DOMPurify.sanitize(wrapped, { ...purifyConfig, RETURN_DOM: true }) as HTMLElement;
    } finally {
      DOMPurify.removeHook('uponSanitizeAttribute');
    }

    //3. unwrap the parse shell; a breakout (stray </tbody>/<table> in the
    //input) makes the structure unrecognisable -> no copy, gate already fired.
    const shell = cleaned.children[0];
    const tbody = shell?.tagName === 'TABLE' ? shell.children[0] : undefined;
    const result =
      shell?.tagName === 'TABLE' && tbody?.tagName === 'TBODY' ? tbody.innerHTML : undefined;

    return { invalidNodes, result };
  }

  //walk the parsed document and report tags/attributes/CSS the email
  //allowlists reject. Reporting is independent of DOMPurify's own removal
  //decisions so the gate signal is complete and deterministic.
  lintNode(node: Node, invalidNodes: string[]): void {
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const el = node as HTMLElement;
    const tagName = el.tagName;

    if (tagName && !this.tagWhitelist_[tagName] && !this.contentTagWhiteList_[tagName]) {
      invalidNodes.push(tagName);
    }

    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i];

      if (!this.attributeWhitelist_[attr.name]) {
        invalidNodes.push(attr.name);
        continue;
      }

      if (attr.name === 'style') {
        const parsed = cssParser.parse(`body{${attr.value}}`, { silent: true });

        if (parsed.stylesheet.parsingErrors.length > 0) {
          invalidNodes.push(attr.value);
          continue;
        }

        for (let t = 0; t < parsed.stylesheet.rules.length; t++) {
          for (let u = 0; u < (parsed.stylesheet.rules[t].declarations?.length ?? 0); u++) {
            const property = parsed.stylesheet.rules[t].declarations![u].property;
            if (!this.cssWhitelist_[property]) {
              invalidNodes.push(property);
            }
          }
        }
        continue;
      }

      if (this.uriAttributes_[attr.name]) {
        //a disallowed scheme is a gate SIGNAL, never a silent strip
        const scheme = this.uriSchemeOf(attr.value);
        if (scheme !== undefined && this.schemaWhiteList_.indexOf(scheme + ':') === -1) {
          invalidNodes.push(`${attr.name}="${attr.value}"`);
        }
      }
    }

    for (let i = 0; i < node.childNodes.length; i++) {
      this.lintNode(node.childNodes[i], invalidNodes);
    }
  }

  //keeps only allowlisted CSS declarations; undefined when the value cannot be
  //parsed at all (the whole style attribute is then dropped from the copy)
  filterStyleValue(value: string): string | undefined {
    const parsed = cssParser.parse(`body{${value}}`, { silent: true });

    if (parsed.stylesheet.parsingErrors.length > 0) return undefined;

    const kept: string[] = [];
    for (let t = 0; t < parsed.stylesheet.rules.length; t++) {
      for (let u = 0; u < (parsed.stylesheet.rules[t].declarations?.length ?? 0); u++) {
        const decl = parsed.stylesheet.rules[t].declarations![u];
        if (this.cssWhitelist_[decl.property]) {
          kept.push(`${decl.property}: ${decl.value}`);
        }
      }
    }

    return kept.length ? kept.join('; ') + ';' : undefined;
  }

  //mirrors how browsers resolve a URI scheme: ASCII tab/newline are removed
  //anywhere in the value and outer whitespace is trimmed BEFORE the scheme is
  //read, so obfuscated values can't dodge the check. Returns the lowercased
  //scheme (without ":"), or undefined when the value carries no scheme at all
  //(relative URLs, fragments, empty).
  uriSchemeOf(value: string): string | undefined {
    const normalized = value.replace(/[\t\n\r]/g, '').trim();
    const match = /^([a-zA-Z][a-zA-Z0-9+.-]*):/.exec(normalized);
    return match ? match[1].toLowerCase() : undefined;
  }
}

export default Sanitizer;
