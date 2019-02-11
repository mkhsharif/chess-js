class Piece {
  constructor(x, y, isWhite, img) {
    this.coor = createVector(x, y);
    this.pixelPos = createVector(
      x * TILE_SIZE + TILE_SIZE / 2,
      y * TILE_SIZE + TILE_SIZE / 2
    );
    this.isWhite = isWhite;
    this.value = 0;
    this.taken = false;
    this.isMoving = false;
  }

  show() {
    if (!this.taken) {
      imageMode(CENTER);
      if (!this.isMoving) {
        image(
          this.img,
          this.pixelPos.x,
          this.pixelPos.y,
          TILE_SIZE / 1.1,
          TILE_SIZE / 1.1
        );
      } else {
        image(this.img, mouseX, mouseY, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  updatePos(x, y) {
    this.coor = createVector(x, y);
    this.pixelPos = createVector(
      x * TILE_SIZE + TILE_SIZE / 2,
      y * TILE_SIZE + TILE_SIZE / 2
    );
  }

  // checks if space is occupied by ally or enemy
  validateMove(x, y, board) {
    if (this.isWhite) {
      for (let i in board.whitePieces) {
        if (
          board.whitePieces[i].coor.x === x &&
          board.whitePieces[i].coor.y == y
        ) {
          return false;
        }
      }

      for (let i in board.blackPieces) {
        if (
          board.blackPieces[i].coor.x === x &&
          board.blackPieces[i].coor.y == y
        ) {
          board.blackPieces[i].taken = true;
          return true;
        }
      }
    } else {
      for (let i in board.blackPieces) {
        if (
          board.blackPieces[i].coor.x === x &&
          board.blackPieces[i].coor.y == y
        ) {
          return false;
        }
      }

      for (let i in board.whitePieces) {
        if (
          board.whitePieces[i].coor.x === x &&
          board.whitePieces[i].coor.y == y
        ) {
          board.whitePieces[i].taken = true;
          return true;
        }
      }
    }
  }
}

class King extends Piece {
  constructor(x, y, isWhite) {
    super(x, y, isWhite);
    if (!isWhite) {
      this.img = images[0];
    } else {
      this.img = images[6];
    }
    this.value = 99;
  }

  requestedMove(x, y, board) {
    // return false if out of bounds
    if (x < 0 || y < 0 || x > 7 || y > 7) {
      return false;
    }

    // valid moves
    if (
      (this.coor.x === x || this.coor.x === x - 1 || this.coor.x === x + 1) &&
      (this.coor.y === y || this.coor.y === y - 1 || this.coor.y === y + 1)
    ) {
      console.log('this.x:', this.coor.x, 'x:', x);
      console.log('this.y:', this.coor.y, 'y:', y);

      this.validateMove(x, y, board);

      return true;
    } else {
      return false;
    }
  }

  //canTake(x, y) {}
}

class Queen extends Piece {
  constructor(x, y, isWhite) {
    super(x, y, isWhite);
    if (!isWhite) {
      this.img = images[1];
    } else {
      this.img = images[7];
    }
    this.value = 9;
  }
}
class Rook extends Piece {
  constructor(x, y, isWhite) {
    super(x, y, isWhite);
    if (!isWhite) {
      this.img = images[2];
    } else {
      this.img = images[8];
    }
    this.value = 5;
  }
}
class Bishop extends Piece {
  constructor(x, y, isWhite) {
    super(x, y, isWhite);
    if (!isWhite) {
      this.img = images[3];
    } else {
      this.img = images[9];
    }
    this.value = 3;
  }
}

class Knight extends Piece {
  constructor(x, y, isWhite) {
    super(x, y, isWhite);
    if (!isWhite) {
      this.img = images[4];
    } else {
      this.img = images[10];
    }
    this.value = 3;
  }
}

class Pawn extends Piece {
  constructor(x, y, isWhite) {
    super(x, y, isWhite);
    if (!isWhite) {
      this.img = images[5];
    } else {
      this.img = images[11];
    }
    this.value = 1;
  }
}
