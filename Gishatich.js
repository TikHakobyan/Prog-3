let LivingCreature = require("./livingCreauture.js")
module.exports =class Gishatich extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 20;
    }
    newDirections() {
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


        matrix[y][x] = 3;
        matrix[this.y][this.x] = 0;


        this.x = x;
        this.y = y;

    }
}



eat() {

    var emptCell = this.chooseCell(2);
    var newCell = random(emptCell);


    if (newCell) {
        var x = newCell[0];
        var y = newCell[1];



        matrix[y][x] = 3;
        matrix[this.y][this.x] = 0;


        this.x = x;
        this.y = y;


        this.multiply++;


        this.energy++;


        for (var i in xotakerArr) {
            if (x == xotakerArr[i].x && y == xotakerArr[i].y) {
                xotakerArr.splice(i, 1);
            }
        }


        if (this.multiply == 10) {
            this.mul()
            this.multiply = 0;
        }


    } else {

        this.move();
        this.energy--;
        if (this.energy <= 0) {
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

        // this.multiply++;



        var norgishatich = new Gishatich(x, y);
        gishatichArr.push(norgishatich);


        matrix[y][x] = 3;
        this.multiply = 0;
    }
}


die() {

    matrix[this.y][this.x] = 0;


    for (var i in gishatichArr) {
        if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
            gishatichArr.splice(i, 1);
        }
    }
}

}