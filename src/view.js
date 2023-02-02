import domManager from "./domManager.js";
/*
View module
- Handles DOM updating tasks
- Returns requests for DOM information
*/
const view = (()=>{
    // cached elements
    const taskEntryListElement = domManager.query(".task-list");
    const tagListElement = domManager.query("nav ul.tag-list");
    const tagModalElement = domManager.query(".tag-modal-wrapper");
    const taskCreationElement = domManager.query(".task-creation");
    const taskDropdownElement = domManager.query(".tag-group ul");
    const taskModalElement = domManager.query(".task-modal-wrapper");
    const taskModalElements = {
        modal: domManager.query(".task-modal"),
        checked: domManager.query(".task-modal-wrapper .checked"),
        title: domManager.query(".task-modal-wrapper .title"),
        description: domManager.query(".task-modal-wrapper .description"),
        tags: domManager.query(".task-modal-wrapper .tags"),
        deadline: domManager.query(".task-modal-wrapper .deadline"),
        priority: domManager.query(".task-modal-wrapper .priority"),
    }
    
    let tagAddDisableReason = "";

    // private methods
    const createCheckmarkElement = () => {
        const checkmarkElement = document.createElement("button");
        const uncheckedSVG = domManager.createSVGElement({path:"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"});
        const checkedSVG = domManager.createSVGElement({path:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"});
        checkmarkElement.classList.add("task-check");
        checkedSVG.classList.add("hidden");
        checkmarkElement.appendChild(uncheckedSVG);
        checkmarkElement.appendChild(checkedSVG);
        return checkmarkElement;
    };

    const createTagEntry = tag => {
        const tagEntry = document.createElement("li");
        const tagDiv = document.createElement("div");
        const tagName = document.createElement("p");
        const colorIcon = domManager.createSVGElement({path:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"});
        tagDiv.classList.add("tag");
        tagDiv.classList.add("icon");
        tagName.textContent = tag.name;
        tagDiv.appendChild(colorIcon);
        tagDiv.appendChild(tagName);
        tagEntry.appendChild(tagDiv);
        return tagEntry;
    }

    const createTaskEntry = task => {
        const taskEntry = document.createElement("div");
        taskEntry.style = "margin: 2rem;";
        taskEntry.classList.add("task-entry");
        taskEntry.appendChild(createCheckmarkElement());
        // add other fields of task
        const makeField = (type, className, style, text)=>{
            const element = document.createElement(type);
            element.classList.add(className);
            element.style = style;
            element.textContent = text;
            return element;
        };
        taskEntry.appendChild(makeField("p", "title", "grid-area: 1/2/1/2; margin-left: 1rem; font-size: 1.5rem; font-weight: 600;", task.title));
        taskEntry.appendChild(makeField("p", "description", "grid-area: 2/2/2/2; margin-left: 1rem;", task.description));
        taskEntry.appendChild(makeField("p", "deadline", "grid-area: 2/3/2/3;", task.deadline));
        const tagGroup = makeField("div", "tag-group", "grid-area: 3/2/3/2; margin-left: 1rem;", "");
        // add tags
        task.tags.forEach(tag => {
            tagGroup.appendChild(createTagEntry(tag));
        });
        taskEntry.appendChild(tagGroup);
        taskEntry.appendChild(makeField("p", "priority","grid-area: 3/3/3/3;", task.priority));
        return taskEntry;
    }


    // public methods
    const querySelected = (selectors) => {
        const selectorCount = selectors.length;
        let p = Promise.resolve([]);
        for (let i=0; i<selectorCount; i++) {
            p = p.then((elements)=>{return elements.concat(domManager.query(selectors[i]))});
        }
        return p;
    }

    const addNewTag = (tag, clickHandler) => {
        const tagElement = createTagEntry(tag);
        tagListElement.appendChild(tagElement);
        tagElement.addEventListener("click", clickHandler);
    };

    const addNewTask = (task,clickHandler) => {
        const taskElement = createTaskEntry(task);
        taskEntryListElement.appendChild(taskElement);
        taskElement.addEventListener("click", clickHandler);
    }

    const generateSideMenuTags = (tags, handlerOfClickHandler) => {
        tagListElement.replaceChildren();
        tags.forEach(tag=>{
            addNewTag(tag, handlerOfClickHandler(tag));
        });
    }

    const generateHomeView = (tasks, handlerOfClickHandler) =>  {
        taskEntryListElement.replaceChildren();
        tasks.forEach(task => {
            addNewTask(task, handlerOfClickHandler(task));
        });
    }

    const loadTagsInTaskCreation = (tags) => {
        taskDropdownElement.replaceChildren();
        tags.forEach(tag => {
            // create element
            const listItem = document.createElement("li");
            const input = document.createElement("input");
            const text = document.createElement("p");
            listItem.classList.add("tag-item");
            // store tag data in dataset
            listItem.dataset.name = tag.name;
            listItem.dataset.color = tag.color;
            input.type = "checkbox";
            input.name = tag.name;
            text.textContent = tag.name;
            listItem.appendChild(input);
            listItem.appendChild(text);
            taskDropdownElement.append(listItem);
        });
    }

    const loadTaskInModal = (task) => {
        // hide the modal itself while loading
        domManager.setVisible(taskModalElements.modal, false);
        taskModalElements.tags.replaceChildren();

        // set text fields
        for (const field in task) {
            if (field == "id" || field == "tags" || field == "checked") continue;
            taskModalElements[field].textContent = task[field];
        }
        // set check icon
        domManager.setVisible(taskModalElements.checked.children[0], !task.checked);
        domManager.setVisible(taskModalElements.checked.children[1], task.checked);
        // set tags
        task.tags.forEach(tag => {
            taskModalElements.tags.appendChild(createTagEntry(tag));
        });

        // display the modal once loaded
        domManager.setVisible(taskModalElements.modal);
    }

    const extractTag = () => {
        const form = document.forms["newTagForm"];
        return {name: form["name"].value, color: form["color"]}
    }

    const extractTask = () => {
        const task = {id: 0, checked: false};
        const form = document.forms["newTaskForm"];
        const fields = ["title", "description", "deadline", "priority"];
        fields.forEach(field => task[field] = form[field].value);
        domManager.queryAll(".task-group")
        task.tags = [];
        for (const node of taskDropdownElement.children) {
            if (node.children[0].checked) task.tags.push({name: node.dataset.name, color: node.dataset.color});
        }
        return task;
    }

    const openTagModal = () => {
        domManager.setVisible(tagModalElement);
    }

    const closeTagModal = () => {
        domManager.setVisible(tagModalElement, false);
    }

    const openTaskCreation = ()=> {
        domManager.setVisible(taskCreationElement);
    }
    const closeTaskCreation = ()=> {
        domManager.setVisible(taskCreationElement, false);
    }

    const toggleTaskListDropdown = () => {
        domManager.setVisible(taskDropdownElement, taskDropdownElement.classList.contains("hidden"));
    }

    const openTaskModal = () => {
        domManager.setVisible(taskModalElement);
    }

    const closeTaskModal = () => {
        domManager.setVisible(taskModalElement, false);
    }

    return { 
        querySelected, 
        generateSideMenuTags, 
        generateHomeView,
        extractTag,
        addNewTag,
        extractTask,
        addNewTask,
        loadTagsInTaskCreation,
        loadTaskInModal,
        toggleTaskListDropdown,
        openTagModal,
        closeTagModal,
        openTaskCreation,
        closeTaskCreation,
        openTaskModal,
        closeTaskModal
    }
    
})();

export default view;