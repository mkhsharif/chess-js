const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const TILE_SIZE = 74;



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
         if ((i + j) % 2 == 0) {
            fill(229,222,195);
         } else {
            fill(119,149,89);
         }
         noStroke();
         rect(i * TILE_SIZE, j * TILE_SIZE, TILE_SIZE, TILE_SIZE);
       }
   }
}
  