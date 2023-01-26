import style from "./style.css";
import domManager from "./domManager.js";
import localDataHandler from "./localDataHandler.js"

// Data that first-time users begin with
const currentVersion = "0.1.0"

let data = {
    version: currentVersion,
    user: "Guest",
    tasks: [{
        title: "Add New Task",
        description: "Pressing \"Add Task\" at the bottom adds a new task.",
        deadline: "",
        priority: 3,
    }],
    tags: []
};


// testing todo modal interactivity
const todoModal = document.querySelector(".todo-modal-wrapper");
domManager.setClick("button.close", ()=>{todoModal.classList.add("hidden")});
domManager.setClick(".todo-entry", ()=>{todoModal.classList.remove("hidden")});
domManager.setClick("main button.add", ()=>{
    domManager.addEntryOfTemplate(".todo-list div:first-child", ".todo-list");
    todoModal.classList.remove("hidden");
});
domManager.setClick("button.data-clear", ()=>{localDataHandler.clear()});
domManager.setClick(".tag-add", ()=>{domManager.addEntryOfTemplate("nav ul.tag-list li","nav ul.tag-list")})
/*

TODO
- add mock tag filtering function
- stylize sidebar, home content, and todo modal to vertical slice
- screenshot all pages and clean up html/css
*/