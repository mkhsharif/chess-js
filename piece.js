class Piece {
  constructor(x, y, isWhite, img) {
    this.coor = createVector(x, y);
    this.pixelPos = createVector((x * TILE_SIZE) + TILE_SIZE/2, (y * TILE_SIZE) + TILE_SIZE/2);
    this.isWhite = isWhite;
    this.value = 0;
    this.taken = false;
    this.isMoving = false;
  }

  show() {
    if (!this.taken) {
        imageMode(CENTER);
      if (!this.isMoving) {
        image(this.img, this.pixelPos.x, this.pixelPos.y, TILE_SIZE / 1.1, TILE_SIZE / 1.1);
      } else {
          
        image(this.img, mouseX, mouseY, TILE_SIZE, TILE_SIZE);
      }
    }
  }

  clicked() {
    console.log('clicked');
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
