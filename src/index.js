import style from "./style.css";
import domManager from "./domManager.js";
import localDataManager from "./localDataManager.js"


// load save data
localDataManager.load();

// testing todo modal interactivity
const todoModal = document.querySelector(".todo-modal-wrapper");
domManager.setClick("button.todo-close", ()=>{todoModal.classList.add("hidden")});
domManager.setClick(".todo-entry", ()=>{todoModal.classList.remove("hidden")});
domManager.setClick("button.todo-add", ()=>{
    domManager.addEntryOfTemplate(".todo-list div:first-child", ".todo-list");
    todoModal.classList.remove("hidden");
});
domManager.setClick("button.data-clear", ()=>{localDataManager.reset()});

/*

TODO
- add reset button for debugging data clearing


*/