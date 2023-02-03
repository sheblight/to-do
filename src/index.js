import style from "./style.css";
import model from "./model.js";
import view from "./view.js";

// main
const userData = model.loadUserData();

// dynamic click events
const tagEntryHandler = (tag) => (()=>{});
const taskEntryHandler = (id)=>(()=>{buttonEvent.openTask(model.getTaskById(id))});
const taskCheckHandler = (task)=>(()=>{
    view.checkOffTaskEntry(task.id, model.toggleCheckOffTask(task.id));
})

view.generateSideMenuTags(userData.tags, tagEntryHandler);
view.generateHomeView(userData.tasks, taskEntryHandler, taskCheckHandler);

const buttonEvent = {
    goToHome: ()=>{ 
        view.generateHomeView(model.getDataCopy().tasks, taskEntryHandler, taskCheckHandler);
        console.log("Load home view.")
    },
    addTag: ()=>{
        view.openTagModal();
    },
    closeTagModal: ()=>{
        view.closeTagModal();
    },
    submitTag: ()=>{
        const tag = model.addNewTag(view.extractTag());
        view.addNewTag(tag, ()=>{});
        view.closeTagModal();
    },
    clearAll: function() {
        Promise.resolve(model.resetData())
        .then( newData => {
            view.generateSideMenuTags(newData.tags, tagEntryHandler);
            view.generateHomeView(newData.tasks, taskEntryHandler, taskCheckHandler);
        });
    },
    newTask: ()=>{
        view.loadTagsInTaskCreation(model.getDataCopy().tags);
        view.openTaskCreation();
    },
    toggleSelectTag: () => {
        view.toggleTaskListDropdown();
    },
    closeTaskCreation: ()=>{
        view.closeTaskCreation();
    },
    createTask: ()=>{
        const task = model.addNewTask(view.extractTaskFromCreation());
        view.addNewTask(task, taskEntryHandler(task.id), taskCheckHandler(task));
        view.closeTaskCreation();
    },
    openTask: function(task) {
        view.openTaskModal();
        view.loadTaskInModal(task);
    },
    checkOffTaskModal: function() {
        const id = view.extractIdOfCurrentTask();
        const checked = model.toggleCheckOffTask(id);
        view.checkOffTaskEntry(id, checked);
        view.checkOffTaskModal(this, checked);
    },
    updateTask: ()=> {
        return;
        const newTagInfo = view.getTaskDetails();
        model.updateTag(newTagInfo.id, newTagInfo);
        view.closeTaskModal();
    },
    closeTask: ()=>{
        view.closeTaskModal();
    },
    removeTask: ()=>{
        const id = view.extractIdOfCurrentTask();
        model.removeTask(id);
        view.removeTask(id);
        view.closeTaskModal();
        console.log(model.getDataCopy());
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
    [".task-modal-wrapper", ()=>{console.log("remove task")}],
    [".task-modal button.close", buttonEvent.closeTask],
    [".task-modal .checked", buttonEvent.checkOffTaskModal],
    [".task-modal .remove", buttonEvent.removeTask],
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
- Display pencil icon on hover over title, description 

Functional TODOs:
- Save title and description locally when modified
- Add buttons for modifying the deadline and priority which saves locally
- Add button at the end of tag group to open a tag dropdown that lets you add/remove tags there
- Pressing the tag in side menu regenerates with the completed tags
- Add invalidation if tag name field is blank

Style TODOs:
- Surround deadline, priority, and tag group with border so it looks pressable
- Style tag modal
- Make this responsive for narrow windows
- Change add task/add tag button to floating circles
- Fix circle icon on tags
*/