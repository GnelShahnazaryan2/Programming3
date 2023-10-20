socket = io()
var side = 20;
matrixSize = 30

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

}

   
socket.on("matrix",drawmtrix);

