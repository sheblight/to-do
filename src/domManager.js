const domManager = (()=>{
    const setClick = function(elementSelector, method) {
        const element = document.querySelector(elementSelector);
        element.addEventListener("click", method);
    }

    const swapElementType = function(targetSelector, newSelector){
        const target = document.querySelector(targetSelector);
        const newElement = document.createElement(newSelector);
        newElement.textContent = target.textContent;
        target.after(newElement);
        target.remove();
    };

    return {setClick, swapElementType};
})();
export default domManager;