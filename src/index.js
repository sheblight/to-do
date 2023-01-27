import style from "./style.css";
import domManager from "./domManager.js";
import localDataHandler from "./localDataHandler.js"

/*

Module for session data.
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
        tags: [
            { name:"Work", colorIndex:0 }, 
            { name:"Hobby", colorIndex:1 }, 
            { name:"Shopping", colorIndex:2 }
        ],
        // New colors must be appended to prevent order from being interfered
        tagColors: ["#dd4242", "#7abb46", "#3d95e2"]
    };

    const getData = ()=>{ return JSON.parse(JSON.stringify(data))};
    const setData = (targetData)=> { data = targetData };
    const clear = () => {
        data.tags = [];
        data.tasks = [];
    }
    const update = function(key, value, handler) {
        handler(data[key], value);
    };

    const pushHandler =  function(property, value) {
        if (typeof property != "object") {
            console.log(`${property} is not an array type.`);
            return;
        }
        property.push(value);
    }

    // validation module to check if data has proper structure before usage
    const validation = {
        tag: function(property, handler) {
            if (!(property["name"] || property["colorIndex"])) {
                console.log(`${property} isn't a proper tag.`);
                return;
            }
            if (handler) {
                handler();
            }
        } 
    };

    return { getData, setData, clear, update, pushHandler, validation };
})(); 

// define handlers for session data
const addColor = (colorValue) => sessionData.update("tagColor", colorValue, sessionData.pushHandler);
const addTag = (tag) => sessionData.update("tags", tag, (property, value)=>{
    sessionData.validation.tag(value, () => sessionData.pushHandler(property, value));
    console.log("Adding tag to session");
});

// load existing data
if (localDataHandler.hasExistingData()) {
    localDataHandler.updateVersion(sessionData.getData().version, "version");
    sessionData.setData(localDataHandler.getData());
}

const initData = sessionData.getData();
const loadTag = (text) => {
    domManager.addEntryOfTemplate("nav ul.tag-list li","nav ul.tag-list");
    domManager.query("nav li:last-child .tag p").textContent = text;
}
for (const tag of initData.tags) {
    loadTag(tag.name);
}

console.log(initData);




// interactive tests
// side menu
domManager.setClick(".tag-add", ()=>{
    // block add request if input is already active
    if (domManager.elementExists("li input")) {
        console.log("Cannot add tag since input is currently prompted");
        return;
    }
    new Promise((resolve)=>{
        domManager.addEntryOfTemplate("nav ul.tag-list li","nav ul.tag-list");
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
})
domManager.setClick("button.data-clear", ()=>{
    console.log(sessionData.getData());
    localDataHandler.clear();
    sessionData.clear();
});

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

- Declare a format for storing tag information.

- Clicking on respective task opens task modal containing respective information
- Updating a field in the task modal updates the task on the home page
- Tags are saved to local upon adding and naming it 
- Task is saved to local upon creating one and updating a field

Style TODOs:
- Need to finish styling the task creation box for readability
- Bug: Tag icon changes sizes depending on tag name length 

*/