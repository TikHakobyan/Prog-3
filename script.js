var side = 25;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var mardakerArr = [];



var matrix = [
    [3, 1, 0, 0, 4, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 4, 0, 0, 4],
    [0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 4],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 3, 5, 1, 1, 1, 1, 1, 1, 0, 2, 3, 5, 3, 4],
    [0, 1, 0, 0, 0, 1, 3, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 4, 4, 0],
    [0, 1, 0, 4, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 3, 4],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 5, 1, 1, 4, 1, 0, 2, 2, 4, 3, 3],
    [0, 0, 0, 0, 0, 1, 0, 4, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 2, 2, 5, 2, 2],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 3, 0, 1, 1, 1, 1, 1, 1, 0, 3, 3, 5, 0, 4],
    [0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 4, 1, 1, 1, 1, 1, 1, 2, 0, 0, 4, 4, 3],
    [2, 0, 0, 0, 4, 1, 0, 0, 1, 1, 1, 4, 3, 1, 4, 1, 1, 0, 2, 0, 0, 5, 3],
    [2, 0, 5, 0, 0, 1, 0, 1, 4, 2, 2, 1, 1, 5, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 4, 1, 2, 3, 2, 0, 0, 1],
]


function setup() {

    frameRate(7);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x]== 5){
                let mardaker = new Mardaker(x,y);
                mardakerArr.push(mardaker);
            }    
            else if (matrix[y][x] == 4) {
                var mard = new Mard(x, y);
                mardArr.push(mard);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 2) {
                var xotaker = new Xotaker(x, y);
                xotakerArr.push(xotaker);
            }
            else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }
        }
    }
}


function draw() {
    console.log(xotakerArr.length)
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('red');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('blue')
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5){
                fill('black');
                rect(j * side, i * side, side, side);
                
            }
        }
    }



    for (var i in grassArr) {
        grassArr[i].mul();
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in mardArr) {
        mardArr[i].eat()
    }
    for(var i in mardakerArr){
        mardakerArr[i].eat()
    }
} 