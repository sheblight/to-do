/*
Module for handling operations for local storage data
Handles retrieving and saving data from local storage. 
*/
const localDataHandler = (()=>{
    
    function hasExistingData() { return window.localStorage.data || false; }
    function getDataCopy() { return JSON.parse(window.localStorage.data) || null; }

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

    return {save, clear, hasExistingData, getDataCopy};

})();

export default localDataHandler;