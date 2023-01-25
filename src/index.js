import style from "./style.css";
import domManager from "./domManager.js";



// testing todo modal interactivity
const todoModal = document.querySelector(".todo-modal-wrapper");
domManager.setClick("button.todo-close", ()=>{todoModal.classList.add("hidden")});
domManager.setClick(".todo-entry", ()=>{todoModal.classList.remove("hidden")});
domManager.setClick("button.todo-add", ()=>{
    domManager.addEntryOfTemplate(".todo-list div:first-child", ".todo-list");
    todoModal.classList.remove("hidden");
});

// TODO
// - make todo data persistent
// - add reset button for debugging data clearing