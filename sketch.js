const TILE_SIZE = 74;
const FONT_SIZE = 17;
const CANVAS_WIDTH = TILE_SIZE * 8;
const CANVAS_HEIGHT = TILE_SIZE * 8;

var images = [];
var names = [
  'BlackKing',
  'BlackQueen',
  'BlackRook',
  'BlackBishop',
  'BlackKnight',
  'BlackPawn',
  'WhiteKing',
  'WhiteQueen',
  'WhiteRook',
  'WhiteBishop',
  'WhiteKnight',
  'WhitePawn'
];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  for (let i = 0; i < 12; i++) {
    images.push(loadImage('assets/' + names[i] + '.png'));
  }

  test = new Board();
}


function draw() {
  //background(225);
  createBoard();
  test.show();


 
  // black pieces
  //img = image(images[8], 0 * TILE_SIZE, 0 * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}



function createBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // add tiles
      if ((i + j) % 2 == 0) {
        fill(229, 222, 195);
      } else {
        fill(119, 149, 89);
      }
      noStroke();
      rect(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
  addNotation();
}

function addNotation() {
  letters = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h' };

  for (let i = 8; i > 0; i--) {
    anti_i = abs(i - 8) + 1;

    if (i % 2 == 1) {
      fill(229, 222, 195);
    } else {
      fill(119, 149, 89);
    }
    text(i, TILE_SIZE / 15, anti_i * TILE_SIZE - 55);
    textSize(FONT_SIZE);

    if (i % 2 == 0) {
      fill(229, 222, 195);
    } else {
      fill(119, 149, 89);
    }
    text(letters[anti_i], anti_i * TILE_SIZE - 12, 8 * TILE_SIZE - 5);
    textSize(FONT_SIZE);
  }
}
