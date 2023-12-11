function areAnagrams(str1, str2) {
    const filteredStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
    const filteredStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');

    if (filteredStr1.length !== filteredStr2.length) {
        return false;
    }
    const charFrequencyStr1 = {};

    for (const char of filteredStr1) {
        if (!charFrequencyStr1[char]) {
            charFrequencyStr1[char] = 1;
        } else {
            charFrequencyStr1[char]++;
        }
    }
    for (const char of filteredStr2) {
        if (!charFrequencyStr1[char]) {
            return false
        }

        charFrequencyStr1[char]--;

        if (charFrequencyStr1[char] === 0) {
            delete charFrequencyStr1[char];
        }
    }

    return Object.keys(charFrequencyStr1).length === 0;
}

const inputStr1 = 'anaaram';
const inputStr2 = 'nagaram';

console.log(areAnagrams(inputStr1, inputStr2));