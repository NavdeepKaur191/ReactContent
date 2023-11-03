/*
Write a JavaScript function that counts the frequency of characters in 
a string. 
*/ 

function countChars(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

/*  Get 5 edge cases and test the function against those edge cases.
What are 5 edge cases this function should account for? Please list the edge cases, followed by a single code block with tests for those edge cases.
*/

console.log('Empty string: ', countChars('')); // Edge case 1
console.log('String with only one character: ', countChars('a')); // Edge case 2
console.log('String with all the same characters: ', countChars('aaaaaa')); // Edge case 3
console.log('String with spaces: ', countChars('Hello world')); // Edge case 4
try {
    console.log('Non-string inputs: ', countChars(123)); // Edge case 5
} catch (err) {
    console.log('Non-string inputs: ', err.message);
}

