let LivingCreature = require("./livingCreauture.js")

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 3;
    }
   NewDirections() {
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
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
   move() {

    var emptCell = this.chooseCell(0);
    var newCell = random(emptCell);

    if (newCell) {
        var x = newCell[0];
        var y = newCell[1];


        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;


        this.x = x;
        this.y = y;

    }
}



eat() {

    var emptCell = this.chooseCell(1);
    var newCell = random(emptCell);


    if (newCell) {
        var x = newCell[0];
        var y = newCell[1];

        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;


        this.x = x;
        this.y = y;


        this.multiply++;


        this.energy++;

        for (var i in grassArr) {
            if (x == grassArr[i].x && y == grassArr[i].y) {
                grassArr.splice(i, 1);
            }
        }


        if (this.multiply == 10) {
            this.mul()
            this.multiply = 0;
        }


    } else {

        this.move();
        this.energy--;
        if (this.energy < 3) {
            this.die();
        }
    }
}


mul() {

    var emptCell = this.chooseCell(0);
    var newCell = random(emptCell);


    if (newCell) {
        var x = newCell[0];
        var y = newCell[1];

        this.multiply++;



        var norXotaker = new Xotaker(x, y);
        xotakerArr.push(norXotaker);


        matrix[y][x] = 2 ;
        this.multiply = 0;
    }
}


die() {

    matrix[this.y][this.x] = 0;


    for (var i in xotakerArr) {
        if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
            xotakerArr.splice(i, 1);
        }
    }
}

}
   // eat, mul, move, die



