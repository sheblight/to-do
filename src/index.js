import style from "./style.css";
import sessionDataHandler from "./sessionDataHandler.js";
import domManager from "./domManager.js";
import localDataHandler from "./localDataHandler.js"

const tagListSelector = "nav ul.tag-list";
const taskListSelector = ".task-list";
const tagEntrySample = `${tagListSelector} li`;
const taskEntrySample = ".task-entry";

// first-time users start with this data here
const initialData = {
    version: "0.1.0",
    user: "Guest",
    tasks: [{
        title: "Add New Task",
        description: "Pressing \"Add Task\" at the bottom adds a new task.",
        deadline: "",
        priority: 3,
    }],
    tags: [
        { name:"Work", colorIndex:0 }, 
        { name:"Hobby", colorIndex:1 }, 
        { name:"Shopping", colorIndex:2 }
    ],
    // New colors must be appended to prevent order from being interfered
    tagColors: ["#dd4242", "#7abb46", "#3d95e2"]
};
const sessionData = sessionDataHandler(initialData);

// define handlers for session data
const addTag = (tag) => sessionData.update("tags", tag, "tag", (property, value) => {
    sessionData.pushHandler(property, value);
    console.log("Adding tag to session");
});
const addColor = colorValue => sessionData.update("tagColor", colorValue, "color", sessionData.pushHandler);

// load existing data
const loadFromLocalData = () => {
    if (localDataHandler.hasExistingData()) {
        localDataHandler.updateVersion(sessionData.getData().version, "version");
        sessionData.setData(localDataHandler.getData());
    }
    return sessionData.getData();
}


const loadTag = tag => {
    domManager.addEntryOfTemplate(tagEntrySample,tagListSelector);
    domManager.query("nav li:last-child .tag p").textContent = tag.name;
}
const loadTask = task => {
    domManager.addEntryOfTemplate(taskEntrySample, taskListSelector);
    // TODO: fill in task data for each property
}

const buttonEvent = {
    clearAll: function() {
        localDataHandler.clear();
        sessionData.clear();
        // clear out tags
        const tags = domManager.queryAll("nav ul.tag-list li:not(.hidden)");
        for (const tag of tags) {
            tag.remove();
        }
    },
    addTag: ()=>{
        // block add request if input is already active
        if (domManager.elementExists("li input")) {
            console.log("Cannot add tag since input is currently prompted");
            return;
        }
        new Promise((resolve)=>{
            domManager.addEntryOfTemplate(tagEntrySample, tagListSelector);
            resolve("OK");
        }).then((value)=>{
            const input = domManager.addTemporaryInput("nav li:last-child .tag p", "nav li:last-child .tag");
            const postChangeEvent = ()=>{
                const textElement = domManager.swapInputWithText(input, "nav li:last-child .tag p", true);
                addTag({"name": textElement.textContent, "colorIndex": 0});
                localDataHandler.save(sessionData.getData());
            };
            input.addEventListener("change", postChangeEvent);
        });
        console.log("Disable adding tag until this is done");
    },
    addTask: ()=>{
        domManager.toggleHidden(".task-initial-entry");
        domManager.moveDown(".task-initial-entry");
    },
    cancelTaskCreate: ()=>{domManager.toggleHidden(".task-initial-entry")},
    submitTaskCreate: ()=>{
        domManager.toggleHidden(".task-initial-entry")
        new Promise((resolve)=>{
            resolve(domManager.addEntryOfTemplate(".task-entry", ".task-list"));
        }).then((entry)=>{
            const elementClasses = ["title", "description", "priority", "deadline"];
            const count = elementClasses.length;
    
            // mapping input results to respective elements
            for (let i = 0; i < count; i++) {
                domManager.swapInputWithText(domManager.query(`.task-initial-entry .${elementClasses[i]}`), `.task-entry:last-child .${elementClasses[i]}`);
            }
    
            // TODO: load in selected tags
        });
    },
    openTask: ()=>{domManager.toggleHidden(".task-modal-wrapper")},
    closeTask: ()=>{domManager.toggleHidden(".task-modal-wrapper")},
};


// load in DOM
const initData = loadFromLocalData();
initData.tags.forEach(tag => loadTag(tag));
console.log(initData); // local data debug

// interactive tests
// side menu
domManager.setClick(".tag-add", buttonEvent.addTag);
domManager.setClick("button.data-clear", buttonEvent.clearAll);
// content
domManager.setClick("main button.add", buttonEvent.addTask);
domManager.setClick(".task-initial-entry .cancel", buttonEvent.cancelTaskCreate);
domManager.setClick(".task-initial-entry .submit", buttonEvent.submitTaskCreate);
// todo modal
domManager.setClick(".task-entry", buttonEvent.openTask);
domManager.setClick("button.close", buttonEvent.closeTask);

/*
Current TODO:
- Reduce the code in index.js but keep it flexible

Functional TODOs:
- Clicking on respective task opens task modal containing respective information
- Updating a field in the task modal updates the task on the home page
- Tags are saved to local upon adding and naming it 
- Task is saved to local upon creating one and updating a field

Style TODOs:
- Need to finish styling the task creation box for readability
- Bug: Tag icon changes sizes depending on tag name length 

*/