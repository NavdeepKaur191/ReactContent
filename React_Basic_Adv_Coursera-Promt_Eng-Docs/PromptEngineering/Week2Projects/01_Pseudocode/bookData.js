/* Prompt
Please write a JavaScript function: 

function getBookById(bookArr, id)
    for each book in bookArr
        if book.id === id
            return book
        else return error object "No book found"
 */

 function getBookById(bookArr, id) {
    for(let i = 0; i < bookArr.length; i++) {
        if(bookArr[i].id === id) {
            return bookArr[i];
        }
    }
    return { error: "No book found" };
}

/* Prompt 
Generate some funny book mock data to test this function. 
*/

let books = [
    {id: 1, title: 'How to Train Your Hamster', author: 'Timmy Tumbles'},
    {id: 2, title: 'The Art of Potato Sculpting', author: 'Potato Picasso'},
    {id: 3, title: 'Zen and the Art of Lawnmower Maintenance', author: 'Grassy Noel'},
    {id: 4, title: 'To Serve Man: A Cookbook', author: 'Chef Kanamit'},
    {id: 5, title: 'Why Unicorns Don’t Do Taxes', author: 'Rainbow Glittersparkle'},
    {id: 6, title: 'Bees? An In-Depth Look into Their Questionable Existence', author: 'Buzz Aldrin'},
    {id: 7, title: '101 Ways to Use a Spatula', author: 'Flip Flapjack'}
];

console.log(getBookById(books, 5));

/* Prompt: 
Write a JavaScript function findBookById which takes two arguments, bookArr and id
- for each book in bookArr, compare each bookArr id with passed in id 
  - if found, return book
  - if not found, return error object, "Sorry, no book found" 
 */

 function findBookById(bookArr, id) {
    // Iterate over each book in the bookArr
    for (let i = 0; i < bookArr.length; i++) {
        // If the id of the current book equals the passed id
        if (bookArr[i].id === id) {
            // return the book
            return bookArr[i];
        }
    }
    // If no book found, return an error object
    return {error: "Sorry, no book found"};
}

console.log(findBookById(books, 4565));
