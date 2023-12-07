//*Solution-1
function findLargestNum(numsArr) {
    let max = numsArr[0];

    for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] > max) {
            max = numsArr[i];
        }
    }
    console.log(max)
}

//*Solution-2
function findLargestNum(numsArr) {
    let max = Math.max(...numsArr);
    console.log(max)
}

findLargestNum([1, 2, 3, 4, 5, 6, 7, 8]);