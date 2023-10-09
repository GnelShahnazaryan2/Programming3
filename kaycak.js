class Kaycak  extends LivingCreature{
    constructor(x, y, index) {
      super(x,y,index)
      this.energy = 8;
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