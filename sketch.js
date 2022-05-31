
// function setup() {
//   createCanvas(500,500);
//   let test = new Something();
// }
//
// function draw() {
//   background('red');
// }

let ox = new Ox();
let font;

function preload(){
  font = loadFont('./fonts/SourceCodePro-Regular.ttf');
}

function setup() {
  textFont(font);
	createCanvas(600, 600);
	for(let i = 0; i < 3; i++){
		ox.addWindox();
	}
}

function draw() {
	background(255);
	ox.draw();
}

function mousePressed(){
	ox.mousePressed();
}

function mouseReleased(){
	ox.mouseReleased();
}

function mouseDragged(){
	ox.mouseDragged();
}
