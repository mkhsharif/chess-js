class Board {
  constructor() {
    this.blackPieces = [];
    this.whitePieces = [];
    this.blackClock = '';
    this.whiteClock = '';
    //this.fen = fen;
    this.setupPieces();
  }

  // startFEN = 'pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq_-_0_1';

  setupPieces() {
    this.whitePieces.push(new King(3, 7, true));
    this.whitePieces.push(new Queen(4, 7, true));
    this.whitePieces.push(new Bishop(2, 7, true));
    this.whitePieces.push(new Bishop(5, 7, true));
    this.whitePieces.push(new Knight(1, 7, true));
    this.whitePieces.push(new Knight(6, 7, true));
    this.whitePieces.push(new Rook(0, 7, true));
    this.whitePieces.push(new Rook(7, 7, true));

    this.whitePieces.push(new Pawn(3, 6, true));
    this.whitePieces.push(new Pawn(4, 6, true));
    this.whitePieces.push(new Pawn(2, 6, true));
    this.whitePieces.push(new Pawn(5, 6, true));
    this.whitePieces.push(new Pawn(1, 6, true));
    this.whitePieces.push(new Pawn(6, 6, true));
    this.whitePieces.push(new Pawn(0, 6, true));
    this.whitePieces.push(new Pawn(7, 6, true));

    this.blackPieces.push(new King(3, 0, false));
    this.blackPieces.push(new Queen(4, 0, false));
    this.blackPieces.push(new Bishop(2, 0, false));
    this.blackPieces.push(new Bishop(5, 0, false));
    this.blackPieces.push(new Knight(1, 0, false));
    this.blackPieces.push(new Knight(6, 0, false));
    this.blackPieces.push(new Rook(0, 0, false));
    this.blackPieces.push(new Rook(7, 0, false));

    this.blackPieces.push(new Pawn(3, 1, false));
    this.blackPieces.push(new Pawn(4, 1, false));
    this.blackPieces.push(new Pawn(2, 1, false));
    this.blackPieces.push(new Pawn(5, 1, false));
    this.blackPieces.push(new Pawn(1, 1, false));
    this.blackPieces.push(new Pawn(6, 1, false));
    this.blackPieces.push(new Pawn(0, 1, false));
    this.blackPieces.push(new Pawn(7, 1, false));
  }

  show() {
    for (let i in this.whitePieces) {
      this.whitePieces[i].show();
    }

    for (let i in this.whitePieces) {
      this.blackPieces[i].show();
    }
  }

  getPieceAt(x, y) {
    for (let i in this.whitePieces) {
      if (
        !this.whitePieces[i].isTaken &&
        this.whitePieces[i].coor.x === x &&
        this.whitePieces[i].coor.y === y
      ) {
        return this.whitePieces[i];
      }

      for (let i in this.blackPieces) {
        if (
          !this.blackPieces[i].isTaken &&
          this.blackPieces[i].coor.x === x &&
          this.blackPieces[i].coor.y === y
        ) {
          return this.blackPieces[i];
        }
      }
    }
  }

  /*setFEN(FEN) {
    clearBoard();

    for (let i in FEN) {
      fillTile(i);
    }
  }

  getFEN(FEN) {
    return FEN;
  }

  clearBoard() {
    this.blackPieces = [];
    this.whitePieces = [];
  }*/
}
