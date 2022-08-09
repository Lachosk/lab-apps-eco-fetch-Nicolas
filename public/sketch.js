let canvas;
let URL = 'https://catfact.ninja/fact';
let catFact = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    console.log(fetch(URL).then(response => response.json()));
    fetch(URL)
        .then(response => response.json())
        .then(data => {catFact = data 
            console.log(catFact.fact)})
}

function draw() {
    background(0);
    newCursor();
    
    if(catFact != null){
        fill(255);
        textSize(20);
        textWrap(WORD);
        text(catFact.fact, 100, 100)
        
    }
    
}

function mouseClicked(){

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}