function findingNumsSummingTarget(numsArr, targetSum) {
    var resultNums = [];

    for (let i = 0; i < numsArr.length; i++) {
        for (let j = i + 1; j < numsArr.length; j++) {
            if (numsArr[i] + numsArr[j] === targetSum) {
                resultNums.push(i, j)
                console.log(resultNums);
            }
        }
    }
};

findingNumsSummingTarget([2, 8, 9, 23, 45, 78], 123);
