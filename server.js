
var express = require("express");

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("../Programming3"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});



matrix = [];
grassArr = [];
grassEaterArr = [];
predatorArr = [];
Kaycakarr = [];
snakeArr = [];
side = 20;
matrixSize = 30


LivingCreature = require("./LivingCreature");
Kaycak = require("./Kaycak");
Grass = require("./grass");
GrassEater = require("./grassEater");
Snake = require("./snake");
Predator = require("./Predator");


var cl = false;

io.on('connection', function (socket) {
    if (cl) {
        setInterval(drawServer, 200);
        cl = true
    }
});


function generateMatrix(matrixSize) {
    arr = []
    for (let i = 0; i < matrixSize; i++) {
        arr.push([])
        for (let j = 0; j < matrixSize; j++) {
            arr[i].push(0)
        }
    }

    fillCharacter(1, 25);
    fillCharacter(2, 12);
    fillCharacter(3, 8);
    fillCharacter(5, 4);

    return arr
}

function fillCharacter(ch, count) {
    for (let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        arr[y][x] = ch
    }
}

matrix = generateMatrix(matrixSize);


for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            let grass = new Grass(x, y, 1)
            grassArr.push(grass)

        }
        else if (matrix[y][x] == 2) {
            let grEater = new GrassEater(x, y, 2)
            grassEaterArr.push(grEater)

        }
        else if (matrix[y][x] == 3) {
            let predator = new Predator(x, y, 3)
            predatorArr.push(predator)

        } else if (matrix[y][x] == 4) {
            let kaycak = new Kaycak(x, y, 4)
            Kaycakarr.push(kaycak)

        }
        else if (matrix[y][x] == 5) {
            let s = new Snake(x, y, 5)
            snakeArr.push(s)
        };
    };

}

setInterval(foo, 2000)
function foo() {
    let x = Math.floor(Math.random() * matrixSize)
    let y = Math.floor(Math.random() * matrixSize)
    matrix[y][x] = 4
    let oneKaycak = new Kaycak(x, y, 4)
    oneKaycak.kill()
    clearInterval(foo)
};


function drawServer() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()
    }

    for (let i = 0; i < predatorArr.length; i++) {
        predatorArr[i].eat()
    }

    for (let i = 0; i < snakeArr.length; i++) {
        snakeArr[i].move()
    }


    let sendData = {
        matrix: matrix
    }

    io.sockets.emit("matrix", sendData)

}


io.on("connection", (socket) => {
    socket.emit("matrix", matrix)
    StartGame()
})


setInterval(drawServer, 1000);


let intervalID;

time = 200

function StartGame() {
    clearInterval(intervalID)
    intervalID = setInterval(() => {
        drawServer()
    }, time)
}