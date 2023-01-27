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

    // Returns the input element
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
        
        // add event to input listener which fires upon completion of naming
        const transferToElement = function(event) {
            element.classList.remove("hidden");
            element.textContent = this.value;
            this.remove();
            console.log("Destroying temp input.")
        }
        input.addEventListener("change", transferToElement);
        input.select();
        console.log("Swapped out input.")
    }
    
    

    return {setClick, addEntryOfTemplate, addTemporaryInput};
})();
export default domManager;