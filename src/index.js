import style from "./style.css";
import model from "./model.js";
import view from "./view.js";

// main
const userData = model.getPreviousData();
view.generateSideMenuTags(userData.tags, (tag)=>(()=>{}));
view.generateHomeView(userData.tasks, (task)=>(()=>{buttonEvent.openTask(task)}));

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
        const tag = model.addNewTag(view.extractTag());
        view.addNewTag(tag, ()=>{});
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
    toggleSelectTag: () => {
        view.toggleTaskListDropdown();
    },
    closeTaskCreation: ()=>{
        view.closeTaskCreation();
    },
    createTask: ()=>{
        const task = model.addNewTask(view.extractTask());
        view.addNewTask(model.addNewTask(task), ()=>{ buttonEvent.openTask(task) });
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
        return;
        const id = view.getTaskDetails().id;
        model.removeTask(id);
        view.removeEntry(id);
        view.closeTaskModal();
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