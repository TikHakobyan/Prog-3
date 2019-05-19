let LivingCreature = require("./livingCreauture.js")
module.exports =class Mardaker extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 35;
    }
    newDirections() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
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


        matrix[y][x] = 5;
        matrix[this.y][this.x] = 0;


        this.x = x;
        this.y = y;

    }
}



eat() {

    let emptCell1 = this.chooseCell(3);
    let emptCell2 = this.chooseCell(4);
    let emptCell = emptCell1.concat(emptCell2);
    var newCell = random(emptCell);


    if (newCell) {
        var x = newCell[0];
        var y = newCell[1];
        
        let c=matrix[y][x]
        matrix[y][x] == 5;
        matrix[this.y][this.x] = 0;


        this.x = x;
        this.y = y;


        this.multiply++;


        this.energy++;

        if (c == 4) {



            for (var i in mardArr) {
                if (x == mardArr[i].x && y == mardArr[i].y) {
                    mardArr.splice(i, 1);
                }
            }
        }
        else if (c== 3) {
            for(let i in gishatichArr){
            if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
    }
        if (this.multiply == 3) {
            this.mul()
            this.multiply = 0;
        }


    }


    else {

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



        var normardaker = new Mardaker(x, y);
        mardakerArr.push(normardaker);


        matrix[y][x] = 4;
        this.multiply = 0;
    }
}


die() {

    matrix[this.y][this.x] = 0;


    for (var i in mardakerArr) {
        if (this.x == mardakerArr[i].x && this.y == mardakerArr[i].y) {
            mardakerArr.splice(i, 1);
        }
    }
}

}