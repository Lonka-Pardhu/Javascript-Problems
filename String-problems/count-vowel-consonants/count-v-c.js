//* Solution-1
function countVowelsAndConsonants(string) {

    const filteredStr = string.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    var vowelsAndConsonants = { vowels: 0, consonants: 0 }

    for (let char of filteredStr) {
        if (vowels.includes(char)) {
            vowelsAndConsonants['vowels']++;
        }
        else if (char !== " ") {
            vowelsAndConsonants['consonants']++;
        }
    }
    return vowelsAndConsonants;
}

const inputString = 'Pardhu';
console.log(countVowelsAndConsonants(inputString));


//* Solution-2

// function countVowelsAndConsonants(string) {

//     const filteredStr = string.toLowerCase();

//     const vowelsRegex = /[aeiou]/

//     var vowelsAndConsonants = { vowels: 0, consonants: 0 }

//     for (let char of filteredStr) {
//         if (vowelsRegex.test(char)) {
//             vowelsAndConsonants['vowels']++;
//         }
//         else if (char !== " ") {
//             vowelsAndConsonants['consonants']++;
//         }
//     }
//     return vowelsAndConsonants;
// }
