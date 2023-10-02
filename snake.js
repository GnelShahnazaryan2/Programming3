class Snake {
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
        }
        for (var i in Kaycakarr) {
            if (x == Kaycakarr[i].x && y == Kaycakarr[i].y) {
                Kaycakarr.splice(i, 1);
                break;


            };
        };
    };




    move() {
        matrix[this.y][this.x] = 0;
        this.x += 1;

        if (this.x === matrix.length && this.y === matrix.length - 1) {
            this.x = 0;
            this.y = 0;
        } else if (this.x === matrix.length) {
            this.x = 0;
            this.y += 1;
        }

        matrix[this.y][this.x] = 5;

        for (let i = 0; i < this.directions.length; i++) {

            // console.log("aaaa");
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            matrix[y][x] = 0;


            this.die(x, y);

        };

    };

};