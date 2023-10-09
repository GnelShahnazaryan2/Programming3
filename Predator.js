class Predator  extends LivingCreature{
    constructor(x, y, index) {
     super(x,y,index)
        this.energy = 8;
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
        return super.chooseCell(character)
    }

    eat() {
        let allGrass = this.chooseCell(1)
        let allGrassEater = this.chooseCell(2)
        let all = allGrass.concat(allGrassEater)
        if (all.length >= 1) {
            let oneFood = random(all)
            let newX = oneFood[0]
            let newY = oneFood[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    this.energy++
                    break;


                }

            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    this.energy = this.energy + grassEaterArr[i].energy
                    grassEaterArr.splice(i, 1);
                    break;


                } else if (this.energy > 0) {
                    this.move()
                }

            }
        }
    }

    move() {
        let emptyCells = this.chooseCell(0)
        if (emptyCells.length >= 1) {
            this.energy -= 2;
            let oneEmptyCell = random(emptyCells)
            let newX = oneEmptyCell[0]
            let newY = oneEmptyCell[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
}