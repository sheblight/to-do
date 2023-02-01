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

    const addNewTag = (tagName) => {
        // TODO: add tag to data operation
        return {name: tagName, colorIndex: 0};
    }

    return { 
        getPreviousData,
        addNewTag 
    } 
})();
export default model;