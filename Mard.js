let LivingCreature = require("./livingCreauture.js")
module.exports =class Mard extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 35;
    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
   move() {

    var emptCell = this.chooseCell(1);
   
    var newCell = random(emptCell);

    if (newCell) {
        var x = newCell[0];
        var y = newCell[1];


        matrix[y][x] = 4;
        matrix[this.y][this.x] = 2;
        var xotaker1= new Xotaker(this.x , this.y);
        xotakerArr.push(xotaker1);


        this.x = x;
        this.y = y;

    }
}



eat() {

    var emptCell = this.chooseCell(3);
    var newCell = random(emptCell);
    
    

    if (newCell) {
        var x = newCell[0];
        var y = newCell[1];



        matrix[y][x] = 4;
        matrix[this.y][this.x] = 0;


        this.x = x;
        this.y = y;


        this.multiply++;


        this.energy++;


        for (var i in gishatichArr) {
            if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }


        if (this.multiply == 3) {
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

        this.multiply++;



        var normard = new Mard(x, y);
        mardArr.push(normard);


        matrix[y][x] = 4;
        this.multiply = 0;
    }
}


die() {

    matrix[this.y][this.x] = 0;


    for (var i in mardArr) {
        if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
            mardArr.splice(i, 1);
            
        }
    }
}

}