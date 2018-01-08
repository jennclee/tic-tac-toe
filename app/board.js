class Board {
  constructor(n) {
    this.createBoard(n)
    this.playerList = {
      'player1': 'x',
      'player2': 'o',
    }
    this.currentPlayer = 'player1'
  }
  
  createBoard(n) {
    // create matrix of n x n size
    this.board = [];
    for (var i = 0; i < n; i++) {
      const row = Array(n).fill(' ');
      console.log(row);
      this.board.push(row);
    }
    return this.board;
  }

  showBoard() {
    // print board
    return this.board;
  }

  togglePiece(x,y) {
    // add piece to x,y coordinate on board
    // check to see if position has been toggled
    // set currentPlayer to other player
  }

  winCheck() {
    // check if last piece placed will end game
    // check for stalemate before every piece is placed
  }
}
