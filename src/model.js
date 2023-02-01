import sessionDataHandler from "./sessionDataHandler.js";
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

    const getUserData = ()=>{
        console.log("Retrieving user data");
        const sessionData = sessionDataHandler(initialData);
        if (localDataHandler.hasExistingData()) {
            localDataHandler.updateVersion(sessionData.getData().version, "version");
            sessionData.setData(localDataHandler.getData());
        }
        return sessionData.getData();
    }

    const addNewTag = (tagName) => {
        // TODO: add tag to data operation
        return {name: tagName, colorIndex: 0};
    }

    return { 
        getUserData,
        addNewTag 
    } 
})();
export default model;