// var matrix = [
//     [0, 1, 0, 1, 0],
//     [0, 0, 0, 1, 1],
//     [1, 1, 3, 1, 0],
//     [0, 0, 2, 0, 0],
//     [0, 1, 1, 1, 0]
// ]
var matrix = [];
var side = 20;//mi uxxankyuniki koxm
let matrixSize = 30
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let Kaycakarr = [];
let snakeArr = [];


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


function setup() {
    matrix = generateMatrix(matrixSize);
    let k = matrix.length
    createCanvas(matrix[0].length * side, k * side);
    background(200);

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

    };
};
function draw() {
    console.log(matrix)
    frameRate(5)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("gray")

            }
            else if (matrix[y][x] == 1) {
                fill("green")

            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")

            } else if (matrix[y][x] == 4) {
                fill("purple")

            }
            else if (matrix[y][x] == 5) {
                fill("black")

            };
            rect(x * side, y * side, side, side)
        };



    };


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
}


setInterval(foo, 2000)

function foo() {
    let x = Math.floor(Math.random() * matrixSize)
    let y = Math.floor(Math.random() * matrixSize)
    matrix[y][x] = 4


    let oneKaycak = new Kaycak(x, y, 4)
    oneKaycak.kill()


};


