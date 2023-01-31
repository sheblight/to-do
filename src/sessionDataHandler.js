/*

Class for session data.
Stores, retrieves, and makes changes to session data.

*/
const sessionDataHandler = (_data => {
    let data = _data;

    const getData = ()=>{ return JSON.parse(JSON.stringify(data))};
    const setData = (targetData)=> { data = targetData };
    const clear = () => {
        data.tags = [];
        data.tasks = [];
    }
    const validateType = function(property, type) { return Boolean(validation[type](property)) };
    const update = function(key, value, valueType, handler) {
        if (!validateType(value, valueType)) {
            console.error(`${value} doesn't follow the given structure.`);
            return;
        }
        handler(data[key], value);
    };

    // Handler for pushing a value to a property given it is an array
    const pushHandler =  function(property, value) {
        if (typeof property != "object") {
            console.log(`${property} is not an array type.`);
            return;
        }
        property.push(value);
    }

    // validation module for checking if data has proper structure before usage
    // every method must return true if the property follows the format
    const validation = {
        tag: property => property["name"] && (property["colorIndex"]!=null), 
        task: property => (property["checked"] != null) 
        && (typeof property["title"] == "string") 
        && (typeof property["description"] == "string") 
        && (typeof property["deadline"] == "string") 
        && (typeof property["priority"] == "string") 
        && property["tags"]
    };

    return { getData, setData, clear, update, pushHandler};
}); 

export default sessionDataHandler;