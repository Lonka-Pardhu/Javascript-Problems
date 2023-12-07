function filterObject(obj, condition) {
    const filteredObject = {};

    for (const [key, value] of Object.entries(obj)) {
        if (condition(key, value)) {
            filteredObject[key] = value;
        }
    }
    return filteredObject;
}
const fruitsInventory = { apple: 20, banana: 34, orange: 26 }

function filterCondition(key, value) {
    return value > 1;
}

const finalObject = filterObject(fruitsInventory, filterCondition);
console.log(finalObject);

