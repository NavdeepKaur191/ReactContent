function removeDuplicates(arr) {
    let unique_array = Array.from(new Set(arr));
    return unique_array;
}

/* Prompt: Give me the edge case tests in a single code block, 
and denote the edge case as part of the console.log. 
Example: console.log('empty array: ', removeDuplicates([])) */

// Test cases for removeDuplicates function
console.log('Empty array: ', removeDuplicates([])); 
console.log('Array with a single element: ', removeDuplicates([1])); 
console.log('Array with all elements the same: ', removeDuplicates([7, 7, 7, 7, 7]));  
console.log('Array with different types of elements: ', removeDuplicates([1, '1', true, true, 'true', null, undefined, null])); 
console.log('Array with nested arrays: ', removeDuplicates([[1, 2], [1, 2], [3, 4]]));  
console.log('Array with objects: ', removeDuplicates([{x: 1}, {x: 1}, {x: 2}]));  
try {
    console.log('Non-array inputs: ', removeDuplicates('Test')); 
} catch (err) {
    console.log('Non-array inputs: ', err.message);
}
console.log('Array with special numbers: ', removeDuplicates([NaN, NaN, Infinity, Infinity]));