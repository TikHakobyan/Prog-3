var side = 25;
var socket = io()

function setup() {

    frameRate(3);
    createCanvas(23 * side, 13 * side);
    background('#acacac');
}
socket.on("draw matrix", drawMatrix);


function drawMatrix(obj) {

   var matrix = obj.matrix
   var seasonTime = obj.season 
  
  

    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                if(seasonTime == "winter"){
                    fill("white")
                }
                else {

                 fill("green");
                }
                
            } else if (matrix[i][j] == 2) {
                if(seasonTime == "winter"){
                    fill("white")
                }
                else {

                 fill("green");
                }
            } else if (matrix[i][j] == 0) {
                if(seasonTime == "winter"){
                    fill("yellow")
                }
                else {

                 fill("orange");
                }   
            }
            else if (matrix[i][j] == 3) {
                if(seasonTime == "winter"){
                    fill("pink")
                }
                else {

                 fill("red");
                }
                
            }
            else if (matrix[i][j] == 4) {
                if(seasonTime == "winter"){
                    fill("DarkSlateGray")
                }
                else {

                 fill("blue");
                }
                
            }
            else if (matrix[i][j] == 5) {
                if(seasonTime == "winter"){
                    fill("brown")
                }
                else {

                 fill("black");
                }

            }
            rect(j * side, i * side, side, side);
        }
    }
} 

