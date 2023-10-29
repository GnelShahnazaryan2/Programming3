socket = io()
var side = 20;
matrixSize = 30
let Statobj = {};

var colorObj = {
    gray: "gray",
    yellow: "yellow",
    red: "red",
    purple: "purple",
    ligthGreen: "#93FF00 ",
    green: "green"

}


var funObj = {
    winter: function () {
        if (winter.innerText == "Winter") {

        }
    },

    summer: function () {
        if (summer.innerText == "Summer") {
            colorObj.gray = "gray",
            colorObj.yellow = "yellow",
            colorObj.red = "red",
            colorObj.purple = "purple",
            colorObj.ligthGreen = "#93FF00 ",
            colorObj.green = "green"
        }
    },

    spring: function () {
        if (spring.innerText == "Spring") {

        }
    },

    autumn: function () {
        if (autumn.innerText == "Autumn") {
            colorObj.green = "#B04B00" 


        }
    }

};


const winter = document.getElementById("winter");
const summer = document.getElementById("summer");
const spring = document.getElementById("spring");
const autumn = document.getElementById("autumn");


winter.addEventListener("click", funObj.winter);

summer.addEventListener("click", funObj.summer);

spring.addEventListener("click", funObj.spring);

autumn.addEventListener("click", funObj.autumn);



function setup() {
    createCanvas(matrixSize * side, matrixSize * side);
    frameRate(50)
    background(200);


};
function drawmtrix(data) {
    matrix = data.matrix

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill(colorObj.gray)

            }
            else if (matrix[y][x] == 1) {
                fill(colorObj.green)

            }
            else if (matrix[y][x] == 2) {
                fill(colorObj.yellow)
            }
            else if (matrix[y][x] == 3) {
                fill(colorObj.red)

            } else if (matrix[y][x] == 4) {
                fill(colorObj.purple)

            }
            else if (matrix[y][x] == 5) {
                fill(colorObj.ligthGreen)

            };
            rect(x * side, y * side, side, side)
        };



    };

}

socket.on("statObj", function (stat) {

    Statobj = stat
    stats.innerHTML = `Grass: ${Statobj.grass};
    GrassEater: ${Statobj.grassEater};
    Predator: ${Statobj.Predator};
    Snake: ${Statobj.Snake};
    Kaycak: ${Statobj.Kaycak}`

});

let stats = document.getElementById("stats")

socket.on("matrix", drawmtrix);

