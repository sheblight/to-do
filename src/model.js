import localDataHandler from "./localDataHandler.js";
/*

Model module
- Handles session and local data logic
- Returns requests for data
*/
const model = (function() {
    var initialData = {
        version: "0.1.0",
        user: "Guest",
        tasks: [
            {
                id: 0,
                checked: false,
                title: "Add New Task",
                description: "Pressing \"Add Task\" at the bottom adds a new task.",
                deadline: "",
                priority: "None",
                tags: [
                    { name:"Work", color:"#000000" }    
                ]
            },
            {
                id: 1,
                checked: false,
                title: "Add New Tag",
                description: "Pressing \"Add Tag\" on the side menu lets you add a new tag.",
                deadline: "",
                priority: "None",
                tags: [
                    { name:"Work", color:"#000000" }    
                ]
            }
        ],
        tags: [
            { name:"Work", color:"#000000" }, 
            { name:"Hobby", color:"#000000" }, 
            { name:"Shopping", color:"#000000" }
        ],
        // New colors must be appended to prevent order from being interfered
        tagColors: ["#dd4242", "#7abb46", "#3d95e2"]
    };

    let sessionData;
    const getNextTaskId = () => !sessionData.tasks ? 0 : sessionData.tasks[sessionData.tasks.length-1].id + 1;
    const getTaskById = (id) => getDataCopy().tasks.find(task => task.id == id);
    const getDataCopy = () => JSON.parse(JSON.stringify(sessionData));

    const getPreviousData = ()=>{
        console.log("Retrieving user data");
        if (localDataHandler.hasExistingData()) {
            localDataHandler.updateVersion(initialData.version, "version");
            sessionData = localDataHandler.getDataCopy();
        }
        else {
            sessionData = JSON.parse(JSON.stringify(initialData));
        }
        return getDataCopy();
    }

    const addNewTag = (tag) => {
        if (!tag["name"] || !tag["color"]) {
            console.error("Extracted invalid tag format");
            return null;
        }
        sessionData.tags.push(tag);
        localDataHandler.save(sessionData);
        return tag;
    }

    const addNewTask = (task) => {
        if (!((typeof task["id"] == "number") 
        && (task["checked"] != null) 
        && (typeof task["title"] == "string") 
        && (typeof task["description"] == "string") 
        && (typeof task["deadline"] == "string") 
        && (typeof task["priority"] == "string") 
        && task["tags"])) {
            console.error("Extracted invalid task format");
            return null;
        }
        task["id"] = getNextTaskId();
        sessionData.tasks.push(task);
        localDataHandler.save(sessionData);
        return task;
    }

    const resetData = () => {
        sessionData = JSON.parse(JSON.stringify(initialData));
        localDataHandler.save(sessionData);
        return getDataCopy();
    };

    return { 
        getPreviousData,
        getDataCopy,
        getTaskById,
        addNewTag,
        addNewTask,
        resetData 
    } 
})();
export default model;