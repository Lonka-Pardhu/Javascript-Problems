//* Solution - 1
function printObjectProperties(obj) {
    let propertyNames = Object.keys(obj);
    for (let i = 0; i < propertyNames.length; i++) {
        console.log(propertyNames[i])
    }
}
// *Solution-2
function printObjectProperties(obj) {
    for (const propName of Object.keys(obj)) {
        console.log(propName);
    }
}

const car = {};
printObjectProperties(car);