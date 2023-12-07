function areObjectsSame(obj1, obj2) {

    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);

    if (keysObj1.length !== keysObj2.length) {
        return false;
    }

    for (let i = 0; i < keysObj1.length; i++) {
        if (!keysObj2.includes(keysObj1[i])) {
            return false;
        }
    }

    for (let j = 0; j < keysObj1.length; j++) {
        if (obj1[keysObj1[j]] !== obj2[keysObj1[j]]) {
            return false;
        }
    }

    return true;

}

const obj1 = { color: 'red', size: 'small' };
const obj2 = { size: 'small', color: 'red' };


console.log(areObjectsSame(obj1, obj2));