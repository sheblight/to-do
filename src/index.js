import style from "./style.css";
import domManager from "./domManager.js";
import localDataManager from "./localDataManager.js"


// load save data
localDataManager.load();

// testing todo modal interactivity
const todoModal = document.querySelector(".todo-modal-wrapper");
domManager.setClick("button.close", ()=>{todoModal.classList.add("hidden")});
domManager.setClick(".todo-entry", ()=>{todoModal.classList.remove("hidden")});
domManager.setClick("main button.add", ()=>{
    domManager.addEntryOfTemplate(".todo-list div:first-child", ".todo-list");
    todoModal.classList.remove("hidden");
});
domManager.setClick("button.data-clear", ()=>{localDataManager.reset()});

/*

TODO
- add mock tag filtering function
- stylize sidebar, home content, and todo modal to vertical slice
- screenshot all pages and clean up html/css
*/