const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const TILE_SIZE = 74;
const FONT_SIZE = 17;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  //background(225);
  createBoard();
}

function createBoard() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
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
  letters = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h" };
  
  for (var i = 8; i > 0; i--) {
      
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
    text(letters[anti_i], anti_i * TILE_SIZE - 15, 8 * TILE_SIZE - 5);
    textSize(FONT_SIZE);
  }
}
