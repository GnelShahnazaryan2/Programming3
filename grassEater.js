class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }

    getNewCoordinates() {
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

    chooseCell(character) {
        this.getNewCoordinates()
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
    eat() {
        let grassNeigh = this.chooseCell(1)
        if (grassNeigh.length >= 1) {
            this.energy++;
            let oneGrassN = random(grassNeigh)//mi hatik havrevani kordinati
            let newX = oneGrassN[0]
            let newY = oneGrassN[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX
            this.y = newY

        } else {
            if (this.energy < 1) {
                this.die()
            } else {
                this.move()
            }
        }
        if (this.energy >= 12) {
            this.mul()
        }
    }
    move() {
        let emptyCells = this.chooseCell(0)
        if (emptyCells.length >= 1) {
            this.energy--;
            let oneEmptyCell = random(emptyCells)
            let newX = oneEmptyCell[0]
            let newY = oneEmptyCell[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }

    }


    mul() {
        let emptyCells = this.chooseCell(0)
        if (emptyCells.length >= 1) {
            this.energy -= 5;
            let oneEmptyCell = random(emptyCells)
            let newX = oneEmptyCell[0]
            let newY = oneEmptyCell[1]
            matrix[newY][newX] = 2
            let obj = new GrassEater(newX, newY, 2)
            grassEaterArr.push(obj)


        }

    }
}

