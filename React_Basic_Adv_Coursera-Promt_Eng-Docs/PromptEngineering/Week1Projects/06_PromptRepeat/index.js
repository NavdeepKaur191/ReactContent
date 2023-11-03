fetch('games.json')
    .then(response => response.json())
    .then(data => {
        const gameContainer = document.getElementById('game-container');
        data.forEach(game => {
            const card = document.createElement('div');
            card.className = 'card';

            const html = `
                <h2>${game.name}</h2>
                <p><strong>Category:</strong> ${game.category}</p>
                <p><strong>Players:</strong> ${game.players}</p>
                <p><strong>Age Group:</strong> ${game.ageGroup}</p>
                <p><strong>Price:</strong> ${game.price}</p>
                <p><strong>Stock:</strong> ${game.stock}</p>
                <a href="#" class="buy-button">Buy Now</a>
            `;

            card.innerHTML = html;
            gameContainer.appendChild(card);
        });
    });
