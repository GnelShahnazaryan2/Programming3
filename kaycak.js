class Kaycak {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.energy = 8;
    }

    chooseCell(character) {

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    die(x, y) {
        for (var i in grassArr) {
            if (x == grassArr[i].x && y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (var i in grassEaterArr) {
            if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }

        }
        for (var i in predatorArr) {
            if (x == predatorArr[i].x && y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;


            }
        }for (var i in snakeArr) {
            if (x == snakeArr[i].x && y == snakeArr[i].y) {
                snakeArr.splice(i, 1);
                break;


            }
        }
    }

    kill() {

        setTimeout(() => {
            console.log(this)
            this.die(this.x, this.y)
            matrix[this.y][this.x] = 0
            console.log(this.directions)
            for (let i = 0; i < this.directions.length; i++) { //[[],[],[],[],[],[],[],]

                // console.log("Asd")
                let x = this.directions[i][0]
                let y = this.directions[i][1]

                matrix[y][x] = 0


                this.die(x, y);

            }

        }, 2000)

    }
}