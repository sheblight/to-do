/*
Module for handling operations for local storage data
Handles retrieving and saving data from local storage. 
*/
const localDataHandler = (()=>{
    
    function hasExistingData() { return window.localStorage.data || false; }
    function getData() { return JSON.parse(JSON.stringify(window.localStorage.data)) || null; }

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

    // Updates the stored data format to current data format
    // Save updated data format to the local storage
    const updateVersion = (currentVersion, versionProperty) => {
        const storedVersion = window.localStorage[versionProperty];
        if (!storedVersion) {
            console.warn("Couldn't find reference to the version on local storage");
            return;
        }
        else if (currentVersion == storedVersion) {
            console.log(`Version is up to date. ${currentVersion}`);
            return;
        }
        // Convert any old data format to new format here
    }

    // Reset data session and locally
    const clear = () => {
        window.localStorage.clear();
        console.log("Cleared local data.")
    };

    // Save given data object into local storage
    const save = (targetData) => {
        if (typeof targetData != "object") {
            console.warn("Cannot save data because target data isn't an Object")
            return;
        }
        window.localStorage.setItem('data', JSON.stringify(targetData));
        console.log("Saved data.");
    }

    return {save, updateVersion, clear, hasExistingData, getData};

})();

export default localDataHandler;