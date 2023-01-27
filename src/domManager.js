/*

Module for handling redundant DOM tasks.

*/
const domManager = (()=>{
    function query(selector) { return document.querySelector(selector); }
    const elementExists = (selector) => query(selector) != null;
    const queryIfSelector = (selector)=>{ return typeof selector == "string" ? query(selector) : selector; };
    
    const setClick = function(elementSelector, callback) {
        const element = query(elementSelector);
        element.addEventListener("click", callback);
    };
    const toggleHidden = (selector) => {
        const elementClassList = query(selector).classList;
        if (elementClassList.contains("hidden")) {
            elementClassList.remove("hidden");
        }
        else {
            elementClassList.add("hidden");
        }
    }
    const moveDown = (selector)=>{
        const element = query(selector);
        element.parentNode.appendChild(element);
    };

    const addEntryOfTemplate = function(templateSelector, containerSelector) {
        const entryTemplate = query(templateSelector);
        const entry = entryTemplate.cloneNode(true);
        const container = query(containerSelector);
        entry.classList.remove("hidden");
        container.appendChild(entry);
        return entry;
    };

    // Returns the input element
    // callback must have one arg to pass text
    const addTemporaryInput = function(elementSelector, containerSelector, inputStyle = "") {
        const input = document.createElement('input');
        const element = query(elementSelector);
        const container = query(containerSelector);
        if (!(element || container)) {
            console.log("Failed to find element or container");
            return;
        }
        input.style += inputStyle;
        element.classList.add("hidden");
        container.appendChild(input);
        input.select();
        console.log("Swapped out input.")
        return input;
    }

    const swapInputWithText = function(input, textSelector, removeInput=false) {
        const text = query(textSelector);
        text.textContent = input.value;
        text.classList.remove("hidden");
        if (removeInput) {
            input.remove();
        }
        return text;
    }
    

    return {query, toggleHidden, moveDown, setClick, addEntryOfTemplate, addTemporaryInput, swapInputWithText, elementExists};
})();
export default domManager;