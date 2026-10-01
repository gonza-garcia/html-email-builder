//this class's method 'sanitizeHtml' recieves a block of html code in form of a string and will check for any invalid tags, attributes and properties inside of it.
//It will collect any invalid expressions and push them into the 'invalidNodes' array.
//After that it will return an object with two properties, the invalidNodes array, and the result sanitized code
//Note that result sanitized code can be undefined, and that means that the function hasInvalidCharacters returned true for some node. If that's the case, the mentioned node will be included in the invalidNodes array.
//Just remember to check if the result is undefined from whereever you call this sanitizeHtml method.


//JavaScript HTML Sanitizer, (c) Alexander Yumashev, Jitbit Software.

//homepage https://github.com/jitbit/HtmlSanitizer

//License: MIT https://github.com/jitbit/HtmlSanitizer/blob/master/LICENSE

import cssParser from 'css';  //npm install css

class Sanitizer {
    constructor() {

        this.tagWhitelist_ = {
          'A': true, 'ABBR': true, 'B': true, 'BLOCKQUOTE': true, 'BODY': true, 'BR': true, 'CENTER': true, 'CODE': true, 'DIV': true, 'EM': true, 'FONT': true,
          'H1': true, 'H2': true, 'H3': true, 'H4': true, 'H5': true, 'H6': true, 'HR': true, 'I': true, 'IMG': true, 'LABEL': true, 'LI': true, 'OL': true, 'P': true, 'PRE': true,
          'SMALL': true, 'SOURCE': true, 'SPAN': true, 'STRONG': true, 'TABLE': true, 'TBODY': true, 'TR': true, 'TD': true, 'TH': true, 'THEAD': true, 'UL': true, 'U': true, 'VIDEO': true,
        };
    
        this.contentTagWhiteList_ = { 'FORM': true }; //tags that will be converted to DIVs
    
        this.attributeWhitelist_ = { 'align': true, 'color': true, 'controls': true, 'height': true, 'href': true, 'src': true, 'alt': true, 'style': true, 'target': true, 'title': true, 'type': true, 'width': true,
        'bgcolor': true, 'valign': true, 'role': true, 'cellspacing': true, 'cellpadding': true, 'border': true, 'class': true,
        };
    
        this.cssWhitelist_ = { 'display': true, 'line-height': true, 'font-family': true, 'color': true, 'background-color': true, 'font-size': true, 'text-align': true, 'font-weight': true, 'padding': true, 'padding-top': true, 'padding-right': true,'padding-bottom': true, 'padding-left': true, 'margin': true, 'margin-top': true, 'margin-right': true, 'margin-bottom': true, 'margin-left': true, 'border': true, 'border-top': true, 'border-right': true, 'border-bottom': true, 'border-left': true, 'border-top-width': true, 'border-top-style': true, 'border-top-color': true, 'border-right-width': true, 'border-right-style': true, 'border-right-color': true, 'border-bottom-width': true, 'border-bottom-style': true, 'border-bottom-color': true, 'border-left-width': true, 'border-left-style': true, 'border-left-color': true, 'border-image': true, 'border-image-source': true, 'border-image-slice': true, 'border-image-width': true, 'border-image-outset': true, 'border-image-repeat': true,'text-decoration': true, 'text-decoration-line': true, 'text-decoration-style': true, 'text-decoration-color': true,
        '-webkit-border-radius': true, '-moz-border-radius': true, 'border-radius': true, 'border-top-left-radius': true, 'border-top-right-radius': true, 'border-bottom-right-radius': true, 'border-bottom-left-radius': true, 'width': true, 'letter-spacing': true, 'text-decoration-thickness': true};
    
        this.schemaWhiteList_ = [ 'http:', 'https:', 'data:', 'm-files:', 'file:', 'ftp:' ]; //which "protocols" are allowed in "href", "src" etc
    
        this.uriAttributes_ = { 'href': true, 'action': true };

    }

    sanitizeHtml(input) {

        const invalidNodes = [];

        input = input.trim();
        if (input === "") return ""; //to save performance and not create iframe

        //firefox "bogus node" workaround
        if (input === "<br>") return "";

        var iframe = document.createElement('iframe');
        if (iframe['sandbox'] === undefined) {
            alert('Your browser does not support sandboxed iframes. Please upgrade to a modern browser.');
            return '';
        }
        iframe['sandbox'] = 'allow-same-origin';
        iframe.style.display = 'none';
        document.body.appendChild(iframe); // necessary so the iframe contains a document
        var iframedoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframedoc.body == null) iframedoc.write("<body></body>"); // null in IE
        iframedoc.body.innerHTML = input;



        const makeSanitizedCopy = (node) => {

            if (!this.tagWhitelist_[node.tagName] && node.tagName) {
                invalidNodes.push(node.tagName);
            }

            var newNode;

            if (node.nodeType === Node.TEXT_NODE) {
                if (this.hasInvalidCharacters(node.tagName)) console.log(node.tagName);
                newNode = node.cloneNode(true);
            }
            else if (node.nodeType === Node.ELEMENT_NODE && (this.tagWhitelist_[node.tagName] || this.contentTagWhiteList_[node.tagName])) {
                //remove useless empty spans (lots of those when pasting from MS Outlook)
                if (this.hasInvalidCharacters(node.tagName)) console.log(node.tagName);
                if ((node.tagName === "SPAN" || node.tagName === "B" || node.tagName === "I" || node.tagName === "U")
                && node.innerHTML.trim() === "") {
                    return document.createDocumentFragment();
                }
                if (this.contentTagWhiteList_[node.tagName]){
                    newNode = iframedoc.createElement('DIV'); //convert to DIV
                } else {
                    newNode = iframedoc.createElement(node.tagName);
                }

                for (var i = 0; i < node.attributes.length; i++) {
                    var attr = node.attributes[i];
                    
                    if (this.attributeWhitelist_[attr.name]) {
                        if (attr.name === "style") {
                            //We parse the style attribute with cssParser looking for bad properties or expressions
                            const parsed = cssParser.parse(`body{${node.attributes?.style?.value}}`, { silent: true });
                            
                            //If there are parsing errors, we pass the whole style string and, optionally, the reasons
                            if (parsed.stylesheet.parsingErrors.length > 0) {
                                invalidNodes.push(node.attributes?.style?.value);
                            }
                            //If no fatal errors, we look for bad properties or expressions and add them to invalidNodes array.
                            else {
                                var rules = parsed.stylesheet.rules;

                                for (var t = 0; t < rules.length; t++) {
                                    for (var u = 0; u < rules[t].declarations?.length; u++) {

                                        var property = rules[t].declarations[u].property;
                                        if (!this.cssWhitelist_[property]) {
                                            invalidNodes.push(property);
                                        }
                                    }
                                }
                            }

                            for (var s = 0; s < node.style.length; s++) {
                                var styleName = node.style[s];

                                if (this.cssWhitelist_[styleName]) {
                                    newNode.style.setProperty(styleName, node.style.getPropertyValue(styleName));
                                }
                                else {
                                    invalidNodes.push(styleName);
                                    console.log('node.tagName: ', i,s, node.tagName, styleName);
                                }
                            }

                        }
                        else {
                            if (this.uriAttributes_[attr.name]) {
                                //if this is a "uri" attribute, that can have "javascript:" or something
                                if (attr.value.indexOf(":") > -1 && !this.startsWithAny(attr.value, this.schemaWhiteList_)) {
                                    continue;
                                }
                            }
                            newNode.setAttribute(attr.name, attr.value);
                        }
                    }
                    else {
                        invalidNodes.push(attr.name);
                    }
                }
                for (i = 0; i < node.childNodes.length; i++) {
                    let name = node.childNodes[i].tagName;

                        // if (this.hasInvalidCharacters(name)){
                        //     console.log('continuing on ' + name);
                        //     console.log(subCopy instanceof DocumentFragment);
                        //     console.log(newNode.appendChild(subCopy, false));
                        //     return;
                        // }
                    var subCopy = makeSanitizedCopy(node.childNodes[i]);
                    try {
                        // if tagName has invalid string characters in it, I include it in the invalidNodes and I just return. This line is important and it has to go with the return statement in the catch block below.
                        if (this.hasInvalidCharacters(name)){
                            invalidNodes.push(name);
                            return;
                        }

                        //this will fail for the next nodes following the one with invalid characters in it.
                        newNode.appendChild(subCopy, false);
                    } catch (error) {
                        // when previous line fails, I just return and the final resultElement variable will be undefined, so I check that before the final return statement
                        return;
                    }
                }
            } else {
                newNode = document.createDocumentFragment();
            }

            return newNode;
        };

        //if this is undefined, it means some node has invalid characters in it. The mentioned node will be included in the invalidNodes array. Remember to check from wherever you call the method if the result property is undefined
        var resultElement = makeSanitizedCopy(iframedoc.body);

        document.body.removeChild(iframe);

        return {
            invalidNodes: invalidNodes,
            result:       resultElement?.innerHTML
                            .replace(/<br[^>]*>(\S)/g, "<br>\n$1")
                            .replace(/div><div/g, "div>\n<div")//replace is just for cleaner code
        }
    }



    startsWithAny(str, substrings) {
        for (var i = 0; i < substrings.length; i++) {
            if (str.indexOf(substrings[i]) === 0) {
                return true;
            }
        }
        return false;
    }

    hasInvalidCharacters(string) {

        const invalidStringCharacters = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }

        for (var w = 0; w < string?.length; w++) {
            if (invalidStringCharacters[string[w]]) {
                return true;
            }
        }

        return false;
    }


    // this.AllowedTags = tagWhitelist_;
    // this.AllowedAttributes = attributeWhitelist_;
    // this.AllowedCssStyles = cssWhitelist_;
    // this.AllowedSchemas = schemaWhiteList_;
    // this.InvalidNodes = invalidNodes;


}

export default Sanitizer;