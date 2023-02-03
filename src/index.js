import style from "./style.css";
import model from "./model.js";
import view from "./view.js";

// main
const userData = model.loadUserData();

// dynamic click events
const tagEntryHandler = (tag) => (()=>{});
const taskEntryHandler = (task)=>(()=>{buttonEvent.openTask(task)});
const taskCheckHandler = (task)=>(()=>{
    view.checkOffTask(task.id, model.toggleCheckOffTask(task.id));
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
        view.addNewTask(task, taskEntryHandler(task), taskCheckHandler(task));
        view.closeTaskCreation();
    },
    openTask: function(task) {
        view.openTaskModal(task);
        view.loadTaskInModal(task);
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
    [".task-modal button.close", buttonEvent.closeTask],
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
- Check/uncheck interaction on entry and task modal. Interaction is saved locally.

Functional TODOs:
- Clicking on the task field allows you to modify the task
- Updating a field in the task modal updates the task on the home page
- Task is saved to local upon creating one and updating a field

Style TODOs:
- Display pencil icon on hover over field
- Make this responsive for narrow windows
- Fix circle icon on tags
*/