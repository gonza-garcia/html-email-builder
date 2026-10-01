// remove newline / carriage return
// remove whitespace (space and tabs) before tags
// remove whitespace between tags
// remove whitespace after tags
export const removeSpaceBetweenHTMLTags = (stringCode: string): string => (
    stringCode
        .replace(/\n/g, "")
        .replace(/[\t ]+</g, "<")
        .replace(/>[\t ]+</g, "><")
        .replace(/>[\t ]+$/g, ">")
)

let id = 0;
export const generateNewId = (): number => {
    const newId = id + 1;
    id++;
    return newId;
}


export const debounceMe = <Args extends unknown[]>(fn: (...args: Args) => void, miliseconds: number) => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (...args: Args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = undefined;
            fn(...args);
        }, miliseconds)
    };
}


export const copyToClipboard = (text: string): void => {
    const fallbackCopy = () => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).catch(fallbackCopy);
    } else {
        fallbackCopy();
    }
}


export const saveHTML = (htmlCode: string, filename: string): void => {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(htmlCode)}`);
    element.setAttribute('download', `${filename}.html`);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


//compares two objects by a propery and returns a function for using with array.sort(). If the sortOrder argument is 1, it will compare ascending, if it´s not 1, it will compare descending
export const compareObjectsByProperty = <T extends Record<string, string | number>>( propertyName: keyof T & string, sortOrder: number ) => {
        let order = (sortOrder === -1) ? -1 : 1;

        return (a: T, b: T): number => {
            /* next line works with strings and numbers,
             * and you may want to customize it to your needs
             */
            const result = (a[propertyName] < b[propertyName]) ? -1 : (a[propertyName] > b[propertyName]) ? 1 : 0;

            return result * order;
        }
    }
