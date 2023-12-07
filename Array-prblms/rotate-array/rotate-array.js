function rotateArray(numsArr, rotations) {
    if (rotations === 0 || numsArr === 0) {
        console.log(numsArr);
    } else {
        for (let i = 1; i <= rotations; i++) {
            let lastEle = numsArr.pop();
            numsArr.unshift(lastEle);
        }
        console.log(numsArr)
    }
}

rotateArray([1, 2, 3, 4], 2);