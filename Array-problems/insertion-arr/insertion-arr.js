//*Solution-1
function arrCommonEle(arr1, arr2) {
    let sameEleArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sameEleArr.push(arr1[i]);
            }
        }
    }
    console.log(sameEleArr);
}

//*Solution-2
function arrCommonEle(arr1, arr2) {
    let copiedArr1 = new Set(arr1);
    let commonEle = arr2.filter((num) => copiedArr1.has(num));
    console.log(commonEle);
}

arrCommonEle([1, 2, 3], [1, 2, 3]);