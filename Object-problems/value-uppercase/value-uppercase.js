function uppercaseStrings(obj) {

    const upperCaseValObj = {};
    for (const [key, value] of Object.entries(obj)) {

        const newValue = typeof value === 'string' ? value.toUpperCase() : value;
        upperCaseValObj[key] = newValue;
    }
    console.log(upperCaseValObj)
}
const object = { name: 'pardhu', age: 22, type: 'not an average' };

uppercaseStrings(object);