// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Get form and output elements
const form = document.getElementById('reverseForm');
const output = document.getElementById('output');

// Listen for form submit event
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputText = document.getElementById('inputText').value;
    const reversedText = reverseString(inputText);

    output.innerHTML = reversedText;
});
