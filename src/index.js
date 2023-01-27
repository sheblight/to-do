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


// interactive tests
// side menu
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
        input.addEventListener("change", ()=>{domManager.swapInputWithText(input, "nav li:last-child .tag p", true);});
    });
    //sessionData.update("tags", outputName, function(keyRef, value) { keyRef.push(value);  });
    console.log("Disable adding tag until this is done");
})

// content
domManager.setClick("main button.add", ()=>{
    domManager.toggleHidden(".task-initial-entry");
    domManager.moveDown(".task-initial-entry");
});
domManager.setClick(".task-initial-entry .cancel", ()=>{domManager.toggleHidden(".task-initial-entry")});
domManager.setClick(".task-initial-entry .submit", ()=>{
    domManager.toggleHidden(".task-initial-entry")
    const submitPromise = new Promise((resolve)=>{
        resolve(domManager.addEntryOfTemplate(".task-entry", ".task-list"));
    });
    submitPromise.then((entry)=>{
        const elementClasses = ["title", "description", "priority", "deadline"];
        const count = elementClasses.length;

        // mapping input results to respective elements
        for (let i = 0; i < count; i++) {
            domManager.swapInputWithText(domManager.query(`.task-initial-entry .${elementClasses[i]}`), `.task-entry:last-child .${elementClasses[i]}`);
        }

        // need to map tag group
    });
});

// todo modal
domManager.setClick(".task-entry", ()=>{domManager.toggleHidden(".task-modal-wrapper")});
domManager.setClick("button.close", ()=>{domManager.toggleHidden(".task-modal-wrapper")});

/*

Functional TODOs:
- Add task button moves all inputs into the new task entry
- Clicking on respective task opens task modal containing respective information
- Updating a field in the task modal updates the task on the home page
- Tags are saved to local upon adding and naming it 
- Task is saved to local upon creating one and updating a field

Style TODOs:
- Need to finish styling the task creation box for readability

*/