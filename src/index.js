import style from "./style.css";
import domManager from "./domManager.js";
import localDataHandler from "./localDataHandler.js"


const currentVersion = "0.1.0"

// data that first-time users begin with
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

// load existing data
if (localDataHandler.hasExistingData()) {
    localDataHandler.updateVersion(currentVersion, "version");
    data = localDataHandler.getData();
}
console.log(data);


// testing task modal interactivity
const taskModal = document.querySelector(".task-modal-wrapper");
domManager.setClick("button.close", ()=>{taskModal.classList.add("hidden")});
domManager.setClick(".task-entry", ()=>{taskModal.classList.remove("hidden")});
domManager.setClick("main button.add", ()=>{
    domManager.addEntryOfTemplate(".task-list div:first-child", ".task-list");
    taskModal.classList.remove("hidden");
});
domManager.setClick("button.data-clear", ()=>{localDataHandler.clear()});
domManager.setClick(".tag-add", ()=>{
    domManager.addEntryOfTemplate("nav ul.tag-list li","nav ul.tag-list");
    domManager.addTemporaryInput("nav .tag p", "nav .tag", "");
})
/*

TODO:
- add tag adding function

*/