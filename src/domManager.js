const domManager = (()=>{
    const setClick = function(elementSelector, method) {
        const element = document.querySelector(elementSelector);
        element.addEventListener("click", method);
    }

    const addEntryOfTemplate = function(templateSelector, containerSelector) {
        const entryTemplate = document.querySelector(templateSelector);
        const entry = entryTemplate.cloneNode(true);
        const container = document.querySelector(containerSelector);
        container.appendChild(entry);
        return entry;
    }

    return {setClick, addEntryOfTemplate};
})();
export default domManager;