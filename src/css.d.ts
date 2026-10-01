declare module 'css' {
  export type CssDeclaration = {
    property: string;
    value: string;
  };

  export type CssRule = {
    declarations?: CssDeclaration[];
  };

  export type CssParseResult = {
    stylesheet: {
      rules: CssRule[];
      parsingErrors: unknown[];
    };
  };

  export function parse(css: string, options?: { silent?: boolean }): CssParseResult;

  const css: { parse: typeof parse };

  export default css;
}
