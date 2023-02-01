import style from "./style.css";
import model from "./model.js";
import view from "./view.js";

/*
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
}

// save methods for storing into local data
const saveHandler = {
    createTag: (tag) => sessionData.update("tags", tag, "tag", (property, value) => {
        sessionData.pushHandler(property, value);
        console.log("Adding tag to session");
    }),
    addTaskToEntry: task => sessionData.update("tasks", task, "task", (property, value) => {
        sessionData.pushHandler(property, value);
        console.log("Adding task to session");
    }),
    //addColor: colorValue => sessionData.update("tagColor", colorValue, "color", sessionData.pushHandler),
};


// button events
const buttonEvent = {
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


// PREVIOUS CONTROLLER 

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
*/

/*
[Controller Responsibilities]
Request MODEL for <user data>
Request VIEW to generate side menu tag display of (tags)
Request VIEW to generate home view of (tasks)
Set callback to each button with the button click events:
    Home: 
        Request VIEW to generate task view of (tasks)
    New Tag: 
        Request VIEW to prompt user for <tag name>. Await for response.
        On success, request MODEL to register (tagName). Then request VIEW to display new tag. 
        On error, generate message.
    Reset Data:
        Request MODEL to reset to default data
        Request VIEW to regenerate side menu with (tags)
        Request VIEW to regenerate home display of (data)
    Add Task:
        Request VIEW to display task creation modal. Throw error if already open and otherwise open.
    Tag List Dropdown:
        If active, request VIEW to display task list dropdown. Otherwise, hide dropdown.
    Cancel Task:
        Request VIEW to close task creation modal.
    Submit Task:
        Request VIEW for <task info> from task creation modal
        Request VIEW to close task creation modal
        Request MODEL to register (task)
        Set callback to new entry to Per Entry event 
    Update Task:
        Request VIEW for task details
        Request MODEL to save (task) details
        Request VIEW to close task detail modal
    Remove Task:
        Request VIEW to close task detail modal
        Request VIEW to remove the current (task) entry
        Request MODEL to remove (task)
    Close Task Modal:
        Request VIEW to close task detail modal

Set callback for all entry click events: 
    Per Tag:
        Request VIEW for clicked <tag name>
        Request MODEL to generate task list view containing only tasks with (clickedTag)
        Request VIEW to generate with (data).
    Per Entry:
        Request VIEW for clicked task entry <index id>
        Request MODEL for <task info> with (index id)
        Request VIEW to open task modal
        Request VIEW to generate (task) details on the modal and return <tag entries>
        Set this callback per tag entry:
            Request VIEW to highlight/unhighlight tag
    Per Checkmark on Entry:
        Request MODEL to complete (selected task).
        On success, request VIEW for completed check on the entry of (selected task)
*/

// main
const userData = model.getPreviousData();
view.generateSideMenuTags(userData.tags, ()=>{});
view.generateHomeView(userData.tasks, ()=>{});

const buttonEvent = {
    goToHome: ()=>{ 
        view.generateHomeView(model.getDataCopy().tasks);
        console.log("Load home view.")
    },
    addTag: ()=>{
        view.openTagModal();
    },
    closeTagModal: ()=>{
        view.closeTagModal();
    },
    submitTag: ()=>{
        view.addNewTag(model.addNewTag(view.extractTag()), ()=>{});
        view.closeTagModal();
    },
    clearAll: function() {
        Promise.resolve(model.resetData())
        .then( newData => {
            view.generateSideMenuTags(newData.tags);
            view.generateHomeView(newData.tasks);
        });
    },
    newTask: ()=>{
        view.loadTagsInTaskCreation(model.getDataCopy().tags);
        view.openTaskCreation();
    },
    toggleSelectTag: ()=> {
        return;
        view.toggleTaskListDropdown();
        //const tagList = domManager.query(".task-creation .tag-group ul");
        //domManager.toggleHidden(tagList);
    },
    closeTaskCreation: ()=>{
        view.closeTaskCreation();
    },
    createTask: ()=>{
        view.addNewTask(model.addNewTask(view.extractTask()), ()=>{});
        view.closeTaskCreation();
    },
    updateTask: ()=> {
        return;
        const newTagInfo = view.getTaskDetails();
        model.updateTag(newTagInfo.id, newTagInfo);
        view.closeTaskDetail();
    },
    closeTaskModal: ()=>{
        return;
        view.closeTaskDetail();
        //domManager.toggleHidden(".task-modal-wrapper")
    },
    removeTask: ()=>{
        return;
        const id = view.getTaskDetails().id;
        model.removeTask(id);
        view.removeEntry(id);
        view.closeTaskDetail();
    }
};
const selectorToEventMap = new Map([
    [".menu-time-options li:first-child", buttonEvent.goToHome],
    [".tag-add", buttonEvent.addTag],
    ["button.data-clear", buttonEvent.clearAll],
    ["main button.add", buttonEvent.newTask],
    [".task-creation .tag-group p", buttonEvent.toggleSelectTag],
    [".task-creation .cancel", buttonEvent.closeTaskCreation],
    [".task-creation .submit", buttonEvent.createTask],
    [".task-modal button.close", buttonEvent.closeTaskModal],
    [".tag-modal .cancel", buttonEvent.closeTagModal],
    [".tag-modal .submit", buttonEvent.submitTag],
    [".tag-modal button.close", buttonEvent.closeTagModal],
]);

// map button click event to each static button
const buttonSelectors = Array.from(selectorToEventMap, entry => entry[0]);
view.querySelected(buttonSelectors).then(buttonElements=>{
    for (let i=0; i<buttonSelectors.length; i++) {
        buttonElements[i].addEventListener("click", selectorToEventMap.get(buttonSelectors[i]));
    }
});

console.log(userData); // local data debug


/*
Current TODO:
- Switch to MVC design

Functional TODOs:
- Clicking on respective task opens task modal containing respective information
- Updating a field in the task modal updates the task on the home page
- Task is saved to local upon creating one and updating a field

Style TODOs:
- Fix circle icon on tags
*/