//your JS code here. If required.
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const submitButton = document.getElementById('submit');
const messageDiv = document.getElementById('message');
const boardDiv = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';

submitButton.addEventListener('click', () => {
    const player1 = player1Input.value;
    const player2 = player2Input.value;

    if (player1 && player2) {
        boardDiv.style.display = 'block';
        document.querySelector('.players').style.display = 'none';
        messageDiv.textContent = `${player1}, you're up!`;

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (!cell.textContent) {
                    cell.textContent = currentPlayer;
                    checkWinner();
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    messageDiv.textContent = `${currentPlayer === 'X' ? player1 : player2}, you're up!`;
                }
            });
        });
    }
});

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6]           // Diagonal
];

function checkWinner() {
    for (const combo of winningCombos) {
        const a = combo[0];
        const b = combo[1];
        const c = combo[2];
        
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            messageDiv.textContent = `${currentPlayer === 'X' ? player1 : player2}, congratulations you won!`;
            cells.forEach(cell => cell.removeEventListener('click', () => {}));
            break;
        }
    }
}
