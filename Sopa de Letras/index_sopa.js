//const apiUrl = 'https://url-el-api';
const word = ["manzana", "banana", "pera", "uva", "naranja"]

document.addEventListener('DOMContentLoaded', async () => {
    const wordSearchElement = document.getElementById('word-search');
    const gridSize = 15;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
  //  const response = await fetch(apiUrl);
  //  const words = await response.json();

    const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(''));

    words.forEach(word => {
        let placed = false;
        while (!placed) {
            const direction = Math.floor(Math.random() * 2); 
            const startX = Math.floor(Math.random() * (gridSize - (direction === 0 ? word.length : 0)));
            const startY = Math.floor(Math.random() * (gridSize - (direction === 1 ? word.length : 0)));

            if (canPlaceWord(word, startX, startY, direction)) {
                placeWord(word, startX, startY, direction);
                placed = true;
            }
        }
    });

    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (grid[i][j] === '') {
                grid[i][j] = letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }

  
    grid.forEach(row => {
        row.forEach(cell => {
            const cellElement = document.createElement('div');
            cellElement.textContent = cell;
            wordSearchElement.appendChild(cellElement);
        });
    });

    function canPlaceWord(word, x, y, direction) {
        for (let i = 0; i < word.length; i++) {
            const newX = x + (direction === 0 ? i : 0);
            const newY = y + (direction === 1 ? i : 0);
            if (grid[newX][newY] !== '' && grid[newX][newY] !== word[i]) {
                return false;
            }
        }
        return true;
    }

    function placeWord(word, x, y, direction) {
        for (let i = 0; i < word.length; i++) {
            const newX = x + (direction === 0 ? i : 0);
            const newY = y + (direction === 1 ? i : 0);
            grid[newX][newY] = word[i];
        }
    }
});
