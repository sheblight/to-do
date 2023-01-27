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



// testing task modal interactivity
const taskModal = document.querySelector(".task-modal-wrapper");
domManager.setClick("button.close", ()=>{taskModal.classList.add("hidden")});
domManager.setClick(".task-entry", ()=>{taskModal.classList.remove("hidden")});
domManager.setClick("main button.add", ()=>{
    domManager.addEntryOfTemplate(".task-list div:first-child", ".task-list");
    taskModal.classList.remove("hidden");
});
domManager.setClick("button.data-clear", ()=>{localDataHandler.clear()});
domManager.setClick(".tag-add", ()=>{domManager.addEntryOfTemplate("nav ul.tag-list li","nav ul.tag-list")})
domManager.setClick(".tag-add", ()=>{domManager.toggleEditable("main h1")})
/*

task
- add mock tag filtering function
- stylize sidebar, home content, and task modal to vertical slice
- screenshot all pages and clean up html/css
*/