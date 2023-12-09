function isPalindrome(str) {
    const filteredStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const palindromeCheckStr = filteredStr.split('').reverse().join('');

    return palindromeCheckStr === filteredStr;
}
const inputStr = "level";
console.log(isPalindrome(inputStr));