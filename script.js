var side = 25;
var socket = io()

function setup() {

    frameRate(7);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
socket.on("draw matrix", drawMatrix);


function drawMatrix(obj) {

    matirx = obj.matrix

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
            else if (matrix[i][j] == 5) {
                fill('black');
                rect(j * side, i * side, side, side);

            }
        }
    }
} 

function spanel(){
    socket.emit("spaniii")
}