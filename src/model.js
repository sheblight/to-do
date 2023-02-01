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

    const resetData = () => {
        sessionData = JSON.parse(JSON.stringify(initialData));
        localDataHandler.save(sessionData);
        return getDataCopy();
    };

    return { 
        getPreviousData,
        addNewTag,
        resetData 
    } 
})();
export default model;