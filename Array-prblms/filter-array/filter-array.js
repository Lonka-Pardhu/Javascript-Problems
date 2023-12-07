function filterEvenNumbers(numsArr) {
    let oddNumbersArr = numsArr.filter(num => num % 2 !== 0)
    console.log(oddNumbersArr);
}

filterEvenNumbers([12, 6, 89, 4, 5, 6, 6, 78, 9, 0])
