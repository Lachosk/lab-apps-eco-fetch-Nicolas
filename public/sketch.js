let canvas;

let URL1 = 'https://catfact.ninja/fact';
let URL2 = 'https://dog.ceo/api/breeds/image/random'
let URL3 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let URL4 = 'https://randomuser.me/api/'
let URL5 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'


let img;
let img2;

let catFact = null;
let dogImg = null;
let bitcoin = null;
let dataUser = null;
let dataNation = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');


    fetch(URL1)
        .then(response => response.json())
        .then(data => {
            catFact = data
        })
    fetch(URL2)
        .then(response => response.json())
        .then(data => {
            dogImg = data
            img = loadImage(dogImg.message);
        });

    fetch(URL3)
        .then(response => response.json())
        .then(data => {
            bitcoin = data
        });

    fetch(URL4)
        .then(response => response.json())
        .then(data => {
            dataUser = data
            //img2 = loadImage(data.results[0].picture.large)
        });

    fetch(URL5)
        .then(response => response.json())
        .then(data => {
            dataNation = data
        });


    fetchData = () => {
        fetch(URL1)
            .then(response => response.json())
            .then(data => {
                catFact = data
            })

        fetch(URL2)
            .then(response => response.json())
            .then(data => {
                dogImg = data
                img = loadImage(dogImg.message);
            });

        fetch(URL3)
            .then(response => response.json())
            .then(data => {
                bitcoin = data
            });

        fetch(URL4)
            .then(response => response.json())
            .then(data => {
                dataUser = data
                //img2 = loadImage(data.results[0].picture.large)
            });

        fetch(URL5)
            .then(response => response.json())
            .then(data => {
                dataNation = data
            });
    }
}

function draw() {
    background(100);
    newCursor();

    fill(255);
    textSize(20);
    textWrap(WORD);
    text("Click para cambiar", windowWidth/4, windowHeight/4, 300)

    if (catFact != null) {
        fill(255);
        text("CatFact", windowWidth / 12, windowHeight / 11, 300)
        fill(255, 255, 0)
        text(catFact.fact, windowWidth / 12, windowHeight / 8, 300)
    }

    if (dogImg != null) {
        fill(255);
        text("Dog Random IMG", windowWidth / 2, windowHeight / 11, 300)
        image(img, windowWidth / 2, windowHeight / 8, 300, 300);
    }

    if (bitcoin != null) {
        fill(255)
        text(bitcoin.chartName, windowWidth / 12, windowHeight - 480, 300)
        fill(0, 255, 0)
        text("Fecha: " + bitcoin.time.updated, windowWidth / 12, windowHeight - 450, 300)
        text("Moneda: " + bitcoin.bpi.USD.code, windowWidth / 12, windowHeight - 400, 300)
        text("Precio: " + bitcoin.bpi.USD.rate, windowWidth / 12, windowHeight - 375, 300)
    }
    if (dataUser != null) {
        fill(255);
        text("Random User", windowWidth / 2, windowHeight - 480,300)
        fill(0, 255, 255)
        text("Nombre: " + dataUser.results[0].name.first + " " + dataUser.results[0].name.last, windowWidth / 2, windowHeight - 450, 300)
        text("Genero: " + dataUser.results[0].gender, windowWidth / 2, windowHeight - 420, 300)
        text("Edad: " + dataUser.results[0].registered.age, windowWidth / 2, windowHeight - 390, 300)
       //no pinta la imagen y tira error porque dice que no tengo acceso idk no se como arreglar esto
        //image(img2,windowWidth / 2, windowHeight - 420,100,100)
    }
    if (dataNation != null) {
        fill(255);
        text("Data Nation",windowWidth/12, windowHeight-230,300)
        fill(100, 0, 255)
        text(dataNation.source[0].annotations.source_name, windowWidth/12, windowHeight-200, 300)
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