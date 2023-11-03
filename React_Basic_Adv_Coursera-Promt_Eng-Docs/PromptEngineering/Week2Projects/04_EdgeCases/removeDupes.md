# Prompt 1
Write a JavaScript function that takes in an array and returns a new array with any duplicate items removed.

# Prompt 2 
List 8 edge cases this function should account for, and provide test cases for each.

1. Empty array
2. Array with a single element
3. Array with all elements the same
4. Array with different types of elements (e.g., numbers, strings, booleans).
5. Array with nested arrays: If the array contains other arrays, the function will not work as expected because JavaScript does not allow comparison of arrays like simple data types. For this, a more complex solution that handles deep equality is needed.
6. Array with objects
7. Non-array inputs
8. Array with special numbers: (NaN and Infinity)

Remember, the removeDuplicates function provided above doesn't handle the cases with nested arrays, objects, or non-array inputs correctly. For these cases, you would need a more sophisticated approach.