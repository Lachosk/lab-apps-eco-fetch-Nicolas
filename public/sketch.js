//No pude con los ultimos 2 jaja :((
    let canvas;

    let URL1 = 'https://catfact.ninja/fact';
    let URL2 = 'https://dog.ceo/api/breeds/image/random'
    let URL3 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    let URL4 = 'https://randomuser.me/api/'
    
    
    let img;
    
    let catFact = null;
    let dogImg = null;
    let bitcoin = null;
    let dataUser = null;
    
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
    
        fetch(URL3)
            .then(response => response.json())
            .then(data => {
                bitcoin = data
                console.log(data)
                console.log(bitcoin.time.updated);
                console.log(bitcoin.chartName)
                console.log(bitcoin.bpi.USD.code)
                console.log(bitcoin.bpi.USD.rate)
            });
    
        fetch(URL4)
            .then(response => response.json())
            .then(data => {
                dataUser = data
                console.log(data)
                console.log(dataUser.results[0].name)
    
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
    
            fetch(URL3)
                .then(response => response.json())
                .then(data => {
                    bitcoin = data
                    console.log(data)
                    console.log(bitcoin.time.updated);
                    console.log(bitcoin.chartName)
                    console.log(bitcoin.bpi.USD.code)
                    console.log(bitcoin.bpi.USD.rate)
                });
    
            fetch(URL4)
                .then(response => response.json())
                .then(data => {
                    dataUser = data
                    console.log(data)
                    console.log(dataUser.results[0].name)
    
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
    
        if (bitcoin != null) {
            fill(0, 255, 0)
            text(bitcoin.chartName, 100, 700, 300)
            text("Fecha: " + bitcoin.time.updated, 100, 400, 300)
            text("Moneda: " + bitcoin.bpi.USD.code, 100, 450, 300)
            text("Precio: " + bitcoin.bpi.USD.rate, 100, 500, 300)
        }
        if (dataUser != null) {
            fill(0, 255, 0)
            text(dataUser.results[0].name.first+" "+dataUser.results[0].name.last, 700, 400, 300)
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