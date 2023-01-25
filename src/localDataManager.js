/*
Module for handling operations for local storage data
Handles retrieving data from local storage, adding a key and value to local storage. 
*/
const localDataManager = (()=>{
    // Data that first-time users begin with
    const initData = {
        version: "0.1.0",
        user: "Guest",
        tasks: [],
        tags: []
    };
    let data = {};

    function getTasks() { return data.tasks; }
    function getTags() { return data.tags; }

    // Checks if local storage can be used
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    // Update version and any old data format into current data format
    // Save updated data format to the local storage
    const updateDataFormatByVersion = (storedVersion) => {
    }

    // Deletes all data
    const reset = () => {
        window["localStorage"].clear();
        console.log("Cleared data.")
    };

    // Update key and value of session data and save locally
    const add = (key, value) => {
        data[key] = value;
        saveData(data);
    };

    // Return local data object. If it doesn't exist, return initial data
    const retrieveData = () => {
        const localData = window.localStorage.getItem('data');
        if (localData) {
            console.log("Retrieving existing data.")
            return JSON.parse(localData);
        }
        console.log("Retrieving first time data.")
        return initData;
    }

    // Save given data object into local storage
    const saveData = (targetData) => {
        if (typeof targetData != "object") {
            console.warn("Cannot save data because target data isn't an Object")
            return;
        }
        window.localStorage.setItem('data', JSON.stringify(targetData));
        console.log("Saved data.");
    }

    // Load data from local storage
    const load = () => {
        if (!window["localStorage"]) {
            console.error("Cannot use local storage on this browser!");
            return;
        }

        // Retrieve data
        data = retrieveData();
        // Sync version
        if (data.version != initData.version) {
            updateDataFormatByVersion(storedVersion);
            console.log(`Updating data from ${storedVersion}.`)
        }

        // Save data to ensure local session is updated
        saveData(data);
    };

    return {load, add, getTags, getTasks};

})();

export default localDataManager;