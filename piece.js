class Piece {
  constructor(x, y, isWhite, img) {
    this.vector = createVector(x, y);
    this.pixelPos = createVector(x * TILE_SIZE, y * TILE_SIZE);
    this.isWhite = isWhite;
    this.value = 0;
    this.taken = false;
  }

  show() {
    if (!this.taken)
      image(this.img, this.pixelPos.x, this.pixelPos.y, TILE_SIZE, TILE_SIZE);
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
