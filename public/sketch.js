let canvas;

let URL1 = 'https://catfact.ninja/fact';
let URL2 = 'https://dog.ceo/api/breeds/image/random'

let img;

let catFact = null;
let dogImg = null;
let doggy = null;
let bringImg = false;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    console.log(fetch(URL1).then(response => response.json()));

    fetch(URL1)
        .then(response => response.json())
        .then(data => {
            catFact = data
            console.log(data)
            console.log(catFact.fact)
        })
    fetch(URL2)
        .then(response => response.json())
        .then(data => {
            dogImg = data
            console.log(data)
            img = loadImage(dogImg.message);
        });



    fetchData = () => {
        fetch(URL1)
            .then(response => response.json())
            .then(data => {
                catFact = data
                console.log(data)
                console.log(catFact.fact)
            })

        fetch(URL2)
            .then(response => response.json())
            .then(data => {
                dogImg = data
                console.log(data)
                img = loadImage(dogImg.message);
            });
    }
}

function draw() {
    background(0);
    newCursor();

    fill(255);
    textSize(20);
    textWrap(WORD);
    text("Click para cambiar", 500, 500, 300)

    if (catFact != null) {
        fill(255, 255, 0)
        text(catFact.fact, 100, 100, 300)
    }

    if (dogImg != null) {
        image(img, windowWidth / 2, 0, 300, 300);
    }

}

function mouseClicked() {
    fetchData();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}