function sumOfValues(obj) {
    let totalSum = Object.values(obj).reduce((sum, currentValue) => sum + currentValue, 0)
    console.log(totalSum);
}

const emptyObject = { jj: 1, ii: 2, hh: 3, bb: 4, kk: 5, nn: 6, pp: 7, ww: 8 };
sumOfValues(emptyObject);