//* Solution-1
function reverseWords(sentence) {
    const providedSentence = sentence.split(" ");
    const reversedSentence = [];
    for (let i = providedSentence.length - 1; i >= 0; i--) {
        let lastWord = providedSentence[i];
        reversedSentence.push(lastWord);
    }
    console.log(reversedSentence.join(" "));
}

const sentence = "Hello, how are you?";
reverseWords(sentence);


// //* Solution-2
// function reverseWords(sentence) {
//     const reversedSentence = sentence.split(" ").reverse().join(" ");
//     console.log(reversedSentence)
// }

