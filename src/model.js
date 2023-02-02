import localDataHandler from "./localDataHandler.js";
/*

Model module
- Handles session and local data logic
- Returns requests for data
*/
const model = (function() {
    var initialData = {
        version: "0.2.0",
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
    const getDefaultDataCopy = () => JSON.parse(JSON.stringify(initialData));

    const retrieveAndUpdate = (previousData) => {
        if (previousData.version == initialData.version) {
            console.log(`Using most updated version ${initialData.version}`)
            sessionData = previousData;
        }
        else if (initialData.version[0] == "1") {
            // if public, handle update to data based on the transitions from the previous version to new
            sessionData = previousData;
            // update new changes to the model here
            sessionData.version = initialData.version;
            console.log(`Updated to latest version ${initialData.version}`)
        }
        else {
            // while in beta version, reset data to default whenever there's an update
            sessionData = JSON.parse(JSON.stringify(initialData));
            console.log(`Reseting data due to new update. Updated to version ${initialData.version}`);          
        }
        return getDataCopy();
    }

    const loadUserData = ()=>{
        console.log("Retrieving user data");
        return localDataHandler.hasExistingData() ? retrieveAndUpdate(localDataHandler.getDataCopy()) : getDefaultDataCopy();
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
        loadUserData,
        getDataCopy,
        getTaskById,
        addNewTag,
        addNewTask,
        resetData 
    } 
})();
export default model;