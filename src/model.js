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
                priority: 3,
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

    return { 
        getPreviousData,
        addNewTag 
    } 
})();
export default model;