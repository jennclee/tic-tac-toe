const readline = require('readline');
const Board = require('./board.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Start game and create board
rl.question('Welcome to tic-tac-toe. Please state the board size: ', (size) => {
  // new Board(size);
  rl.close();
});

// Add piece
rl.question('Where would you like to place your piece? ', (coordinates) => {
    // Board.togglePiece(coordinates);
  rl.close();
});