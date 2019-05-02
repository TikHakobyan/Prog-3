class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;

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



    chooseCell(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        if (this.multiply == 1) {


            var emptCell = this.chooseCell(0);
            var newCell = random(emptCell);
            if (newCell) {
                var x = newCell[0];
                var y = newCell[1];


                var newGrass = new Grass(x, y);
                grassArr.push(newGrass);


                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}



class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;
        this.directions = [];
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


    chooseCell(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 20;
        this.directions = [];
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

    chooseCell() {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 0) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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



class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 35;
        this.directions = [];
    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }

    chooseCell(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }

            }
           
        }
        return found;

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


class Mardaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 35;
        this.directions = [];
    }


    newDirections() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
        ];
    }

    chooseCell(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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