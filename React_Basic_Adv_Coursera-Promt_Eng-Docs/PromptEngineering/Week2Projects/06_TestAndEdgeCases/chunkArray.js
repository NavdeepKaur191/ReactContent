/* 
Practice: Test Your Function and Generate Edge Cases 
https://chat.openai.com/

1. Take a minute to read and understand the chunkArray function  
2. Ask ChatGPT to generate 3 console.log statements to test the function.
3. Prompt ChatGPt for 5 edge cases 
4. Read the edge cases and pick a couple you want your function to
account for (hint: some may involve infinite loops, so don't just run the test cases!)
5. Ask ChatGPT to revise your function based on those edge cases. Be sure
to include instructions (or ask for suggestions) for how you want to deal with them!
*/

/* Prompt: Given an array and a chunk size, 
divide the array into many subarrays where each subarray has the specified size. */
function chunkArray(array, size) {
    // Check if the first argument is an array
    if (!Array.isArray(array)) {
        throw new Error('The first argument must be an array.');
    }

    // Check if the second argument is a positive integer
    if (typeof size !== 'number' || size <= 0 || Math.floor(size) !== size) {
        throw new Error('The second argument must be a positive integer.');
    }

    let chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}


// Prompt: Call this function with 3 test inputs and console.log results. 
// Test Case 1
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let size1 = 3;
// console.log(chunkArray(array1, size1));  // Expected output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// // Test Case 2
// let array2 = ["a", "b", "c", "d", "e"];
// let size2 = 2;
// console.log(chunkArray(array2, size2));  // Expected output: [['a', 'b'], ['c', 'd'], ['e']]

// // Test Case 3
// let array3 = [true, false, true, false, true];
// let size3 = 1;
// console.log(chunkArray(array3, size3));  // Expected output: [[true], [false], [true], [false], [true]]

// Generate 5 edge cases this function should account for. 

// Edge Cases
// Input Array is null or undefined: 
//chunkArray(null, 2);

// Chunk Size is Zero or Negative: 
// chunkArray([1, 2, 3, 4, 5], 0); // infinite loop!

//Chunk Size is null, undefined, or Not a Number: 
//chunkArray([1, 2, 3, 4, 5], null);
chunkArray([1, 2, 3, 4, 5], "two");
 

/* Revise the function based on the edge cases above. Throw a user-friendly error if the first argument is not an array, or if the second argument is not a positive integer. */
