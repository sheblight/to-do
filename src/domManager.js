/*

Module for handling redundant DOM tasks.

*/
const domManager = (()=>{
    function query(selector) { return document.querySelector(selector); }
    const setClick = function(elementSelector, method) {
        const element = query(elementSelector);
        element.addEventListener("click", method);
    };

    const addEntryOfTemplate = function(templateSelector, containerSelector) {
        const entryTemplate = query(templateSelector);
        const entry = entryTemplate.cloneNode(true);
        const container = query(containerSelector);
        container.appendChild(entry);
        return entry;
    };

    const toggleEditable = function(selector) {
        const element = query(selector);
        if (element.contenteditable == "true") {
            element.contenteditable = "false";
            console.log(`Deselect taret ${selector}`);
        }
        else {
            element.contenteditable = "true";   // running but not affecting
            element.click();    // running but not affecting
            element.focus();
            console.log(`Select taret ${selector}`);
        }
    }

    return {setClick, addEntryOfTemplate, toggleEditable};
})();
export default domManager;