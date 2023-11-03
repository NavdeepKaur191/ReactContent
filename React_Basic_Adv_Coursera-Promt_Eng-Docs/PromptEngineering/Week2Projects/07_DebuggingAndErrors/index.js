/* Prompt GPT to fix the errors:  

- Run the function. Copy and paste the error message into ChatGPT 
along with the function 
- Ask the AI to explain the errors as code comments. 
*/ 

function createCard(parentId, cardId, cardClass, title, content) {
    // Old code: let parentElement = document.getElementById;
    // New code: calling document.getElementById with parentId as an argument
    let parentElement = document.getElementById(parentId);
    
    let card = document.createElement('div');
    card.setAttribute('id', cardId);
    card.setAttribute('class', cardClass);

    let cardTitle = document.createElement('h2');
    cardTitle.innerText = title;
    // Append cardTitle to card
    card.appendChild(cardTitle);

    let cardContent = document.createElement('p');
    cardContent.innerText = content;
    // Old code: card = cardContent; 
    // New code: append cardContent to card
    card.appendChild(cardContent);

    // Check if parentElement is not null before appending card
    if (parentElement !== null) {
        parentElement.appendChild(card);
    }
}

createCard('blogPreviews', 'post1', 'card', 'How to Bake Sourdough', 'A step-by-step guide to baking your own sourdough bread at home. Learn how to create your own starter, knead the dough, and bake to perfection.');

createCard('blogPreviews', 'post2', 'card', 'Gardening 101', 'Discover the joy of gardening with our easy beginner\'s guide. Learn everything from choosing the right plants, preparing the soil, to maintaining your garden.');