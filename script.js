socket = io()
var side = 20;
matrixSize = 30

let Statobj = {};

var colorObj = {
     gray : "gray",
     yellow : "yellow",
     red : "red",
     purple : "purple",
     black : "black",
     green : "green"
    
}



const winter = document.getElementById("winter");

winter.addEventListener("click", function(){

    

});

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
                fill(gray)

            }
            else if (matrix[y][x] == 1) {
                fill(green)

            }
            else if (matrix[y][x] == 2) {
                fill(yellow)
            }
            else if (matrix[y][x] == 3) {
                fill(red)

            } else if (matrix[y][x] == 4) {
                fill(purple)

            }
            else if (matrix[y][x] == 5) {
                fill(black)

            };
            rect(x * side, y * side, side, side)
        };



    };

}

socket.on("statObj", function(stat){

    Statobj = stat
    stats.innerHTML = `Grass: ${Statobj.grass};
    `

});

let stats = document.getElementById("stats")
   
socket.on("matrix",drawmtrix);

