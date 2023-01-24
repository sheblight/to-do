const domManager = (()=>{
    const setClick = function(elementSelector, method) {
        const element = document.querySelector(elementSelector);
        element.addEventListener("click", method);
    }
    return {setClick};
})();
export default domManager;