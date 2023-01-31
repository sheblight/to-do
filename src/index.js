import style from "./style.css";
import sessionDataHandler from "./sessionDataHandler.js";
import domManager from "./domManager.js";
import localDataHandler from "./localDataHandler.js"

// Selector constants
const tagListSelector = "nav ul.tag-list";
const tagEntrySample = `${tagListSelector} li`;
const taskListSelector = ".task-list";
const taskEntrySample = ".task-entry";

// first-time users initialize with this data
const initialData = {
    version: "0.1.0",
    user: "Guest",
    tasks: [
        {
            checked: false,
            title: "Add New Task",
            description: "Pressing \"Add Task\" at the bottom adds a new task.",
            deadline: "",
            priority: 3,
            tags: [
                { name:"Work", colorIndex:0 }    
            ]
        }
    ],
    tags: [
        { name:"Work", colorIndex:0 }, 
        { name:"Hobby", colorIndex:1 }, 
        { name:"Shopping", colorIndex:2 }
    ],
    // New colors must be appended to prevent order from being interfered
    tagColors: ["#dd4242", "#7abb46", "#3d95e2"]
};
const sessionData = sessionDataHandler(initialData);

// load methods
const loadHandler = {
    getLocalData: () => {
        if (localDataHandler.hasExistingData()) {
            localDataHandler.updateVersion(sessionData.getData().version, "version");
            sessionData.setData(localDataHandler.getData());
        }
        return sessionData.getData();
    },
    loadTagInSidebar: tag => {
        domManager.addEntryOfTemplate(tagEntrySample,tagListSelector);
        domManager.query("nav li:last-child .tag p").textContent = tag.name;
    },
    loadTaskToContent: task => {
        console.log(`Add ${task.title} task to content`);
        // fill in task data for each property
        domManager.addEntryOfTemplate(".task-entry", ".task-list")
        const elementClasses = ["title", "description", "priority", "deadline"];
        const count = elementClasses.length;
        // Mapping input results to respective elements
        for (let i = 0; i < count; i++) {
            const field = domManager.query(`.task-entry:last-child .${elementClasses[i]}`);
            field.textContent = task[elementClasses[i]];
        }
        // store selected tags into task
        const tagOptions = domManager.queryAll(".task-entry:last-child .tag-group ul input");
        for (const tagEntry of task.tags) {
            const tagDisplay = domManager.addEntryOfTemplate(".task-entry:last-child .tag-group div", ".task-entry:last-child .tag-group");
            tagDisplay.childNodes[3].textContent = tagEntry.name;
        }
        // save task locally
        console.log(task);
    },
    loadTagInDropdown: tag => {
        const tagEntry = domManager.addEntryOfTemplate(".task-creation .tag-group > li", ".task-creation .tag-group ul");
        tagEntry.childNodes[1].nodeValue = tag.name;
    },
    loadTaskToModal: task => {
        /* TODO */
    },
}

// save methods for storing into local data
const saveHandler = {
    createTag: (tag) => sessionData.update("tags", tag, "tag", (property, value) => {
        sessionData.pushHandler(property, value);
        console.log("Adding tag to session");
    }),
    addTagToTask: (tag, task) => { /* TODO */},
    addTagsToTask: (tags,task) => {/* TODO */},
    addTaskToEntry: task => sessionData.update("tasks", task, "task", (property, value) => {
        sessionData.pushHandler(property, value);
        console.log("Adding task to session");
    }),
    //addColor: colorValue => sessionData.update("tagColor", colorValue, "color", sessionData.pushHandler),
};

// button events
const buttonEvent = {
    moveToHome: ()=>{ /* TODO */ },
    filterByTag: ()=> { /* TODO */ },
    addTag: ()=>{
        // block request to add if input field is already active
        if (domManager.elementExists("li input")) {
            console.log("Cannot add tag since input is currently prompted");
            return;
        }
        new Promise((resolve)=>{
            domManager.addEntryOfTemplate(tagEntrySample, tagListSelector);
            resolve("OK");
        }).then((value)=>{
            const input = domManager.addTemporaryInput("nav li:last-child .tag p", "nav li:last-child .tag");
            input.addEventListener("change", ()=>{
                const textElement = domManager.swapInputWithText(input, "nav li:last-child .tag p", true);
                saveHandler.createTag({"name": textElement.textContent, "colorIndex": 0});
                localDataHandler.save(sessionData.getData());
            });
        });
        console.log("Disable adding tag until this is done");
    },
    clearAll: function() {
        localDataHandler.clear();
        sessionData.clear();
        // clear out tags
        const tags = domManager.queryAll("nav ul.tag-list li:not(.hidden)");
        for (const tag of tags) {
            tag.remove();
        }
    },
    addTask: ()=>{
        domManager.toggleHidden(".task-creation");
        domManager.moveDown(".task-creation");
    },
    toggleSelectTag: ()=> {
        const tagList = domManager.query(".task-creation .tag-group ul");
        domManager.toggleHidden(tagList);
    },
    cancelTaskCreate: ()=>{domManager.toggleHidden(".task-creation")},
    submitTaskCreate: ()=>{
        domManager.toggleHidden(".task-creation")
        new Promise((resolve)=>{
            resolve(domManager.addEntryOfTemplate(".task-entry", ".task-list"));
        }).then((entry)=>{
            let task = { checked: false, tags: [] };
            const elementClasses = ["title", "description", "priority", "deadline"];
            const count = elementClasses.length;
            // Mapping input results to respective elements
            for (let i = 0; i < count; i++) {
                const input = domManager.query(`.task-creation .${elementClasses[i]}`);
                task[elementClasses[i]] = input.value;
                domManager.swapInputWithText(input, `.task-entry:last-child .${elementClasses[i]}`);
            }
            // store selected tags into task
            const tagList = sessionData.getData().tags;
            const tagOptions = domManager.queryAll(".task-creation .tag-group ul input");
            for (let i = 0; i < tagList.length; i++) {
                if (!tagOptions[i].checked) continue;
                task.tags.push(tagList[i]);
                // add to task display
                const tagDisplay = domManager.addEntryOfTemplate(".task-entry:last-child .tag-group div", ".task-entry:last-child .tag-group");
                tagDisplay.childNodes[3].textContent = tagList[i].name;
            }
            // save task locally
            saveHandler.addTaskToEntry(task);
            localDataHandler.save(sessionData.getData());
            console.log(task);
        });
    },
    openTask: ()=>{domManager.toggleHidden(".task-modal-wrapper")},
    closeTask: ()=>{domManager.toggleHidden(".task-modal-wrapper")},
    toggleCheckTask: ()=>{ /* TODO */ },
    removeTask: ()=>{ /* TODO */ }
};
const selectorToEventMap = new Map([
    [".tag-add", buttonEvent.addTag],
    ["button.data-clear", buttonEvent.clearAll],
    ["main button.add", buttonEvent.addTask],
    [".task-creation .tag-group p", buttonEvent.toggleSelectTag],
    [".task-creation .cancel", buttonEvent.cancelTaskCreate],
    [".task-creation .submit", buttonEvent.submitTaskCreate],
    [".task-entry", buttonEvent.openTask],
    ["button.close", buttonEvent.closeTask],
]);

// load in local data, then into DOM
const initData = loadHandler.getLocalData();
initData.tags.forEach(tag => {
    loadHandler.loadTagInSidebar(tag);
    loadHandler.loadTagInDropdown(tag);
});
buttonEvent.toggleSelectTag();
const taskCount = initData.tasks.length;
for (let i=0, p=Promise.resolve(); i<taskCount; i++) {
    p = p.then(loadHandler.loadTaskToContent(initData.tasks[i]));
}

// map button click event to each button
selectorToEventMap.forEach((value, key, map) => domManager.setClick(key, value));

console.log(initData); // local data debug

/*
Current TODO:
- Switch to MVC

Functional TODOs:
- Clicking on respective task opens task modal containing respective information
- Updating a field in the task modal updates the task on the home page
- Tags are saved to local upon adding and naming it 
- Task is saved to local upon creating one and updating a field

Style TODOs:
- Need to finish styling the task creation box for readability
- Bug: Tag icon changes sizes depending on tag name length 

*/