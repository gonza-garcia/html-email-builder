
// remove newline / carriage return
// remove whitespace (space and tabs) before tags
// remove whitespace between tags
// remove whitespace after tags
export const removeSpaceBetweenHTMLTags = stringCode => (
    stringCode
        .replace(/\n/g, "")
        .replace(/[\t ]+</g, "<")
        .replace(/>[\t ]+</g, "><")
        .replace(/>[\t ]+$/g, ">")
)

let id = 0;
export const generateNewId = () => {
    const newId = id + 1;
    id++;
    return newId;
}



// let timer = null;

// export const debounceMe = (fn) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//         fn(value); 
//     }, 500);
// }

export const debounceMe = (fn, miliseconds) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        let ths = this;
        timer = setTimeout(() => {
            timer = null;
            fn.apply(ths, args);
        }, miliseconds)
    };
}





export const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}



export const saveHTML = (htmlCode, filename) => {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(htmlCode)}`);
    element.setAttribute('download', `${filename}.html`);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}




//compares two objects by a propery and returns a function for using with array.sort(). If the sortOrder argument is 1, it will compare ascending, if it´s not 1, it will compare descending
export const compareObjectsByProperty = ( propertyName, sortOrder ) => {
        let order = (sortOrder === -1) ? -1 : 1;

        return (a,b) => {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            const result = (a[propertyName] < b[propertyName]) ? -1 : (a[propertyName] > b[propertyName]) ? 1 : 0;

            return result * order;
        }
    }