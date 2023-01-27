import style from "./style.css";
import domManager from "./domManager.js";
import localDataHandler from "./localDataHandler.js"

/*

Class for session data.
Stores, retrieves, and makes changes to session data.

*/
const sessionData = (function() {
    let data = {
        version: "0.1.0",
        user: "Guest",
        tasks: [{
            title: "Add New Task",
            description: "Pressing \"Add Task\" at the bottom adds a new task.",
            deadline: "",
            priority: 3,
        }],
        tags: ["Work", "Hobby", "Shopping"]
    };

    const getData = ()=>{ return JSON.parse(JSON.stringify(data))};
    const setData = (targetData)=> { data = targetData };
    const update = function(key, value, handler) {
        handler(this.data[key], value);
    };

    return { getData, setData, update };
})(); 

// load existing data
if (localDataHandler.hasExistingData()) {
    localDataHandler.updateVersion(sessionData.getData().version, "version");
    sessionData.setData(localDataHandler.getData());
}
console.log(sessionData.getData());


// testing interactivity
const taskModal = document.querySelector(".task-modal-wrapper");
domManager.setClick("button.close", ()=>{taskModal.classList.add("hidden")});
domManager.setClick(".task-entry", ()=>{taskModal.classList.remove("hidden")});
domManager.setClick("main button.add", ()=>{
    domManager.addEntryOfTemplate(".task-list div:first-child", ".task-list");
    taskModal.classList.remove("hidden");
});
domManager.setClick("button.data-clear", ()=>{localDataHandler.clear()});
domManager.setClick(".tag-add", ()=>{
    // block add request if input is already active
    if (domManager.elementExists("li input")) {
        console.log("Cannot add tag since input is currently prompted");
        return;
    }

    const entryPromise = new Promise((resolve)=>{
        domManager.addEntryOfTemplate("nav ul.tag-list li","nav ul.tag-list");
        resolve("OK");
    });
    entryPromise.then((value)=>{
        const input = domManager.addTemporaryInput("nav li:last-child .tag p", "nav li:last-child .tag");
        input.addEventListener("change", ()=>{domManager.swapInputWithText(input, "nav li:last-child .tag p");});
    });
    //sessionData.update("tags", outputName, function(keyRef, value) { keyRef.push(value);  });
    console.log("Disable adding tag until this is done");
})
/*

TODO:
- Bug: click event fires in Chrome but not in Firefox. Most likely because an error was thrown in Firefox.
- Stylize and embed frame for selecting date
- Cancel task button should remove the task element
- Add task button should move all inputs into a task entry
- 
*/