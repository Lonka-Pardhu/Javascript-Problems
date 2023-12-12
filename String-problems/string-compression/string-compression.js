function compressString(str) {
    let result = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i + 1]) {
            count++;
        } else if (count > 1) {
            result += str[i] + count;
            count = 1;
        } else {
            result += str[i];
        }
    }
    console.log(result);
}

const inputString = 'AAsa$$#bB';

compressString(inputString);