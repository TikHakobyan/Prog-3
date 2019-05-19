grassArr = [];
xotakerArr = [];
gishatichArr = [];
mardArr = [];
mardakerArr = [];

matrix = [
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
];
var Xotaker = require("./Xotaker.js")
var Grass = require("./Grass.js")
var Gishatich = require("./Gishatich.js")
var Mard = require("./Mard.js")
var Mardaker = require("./Mard.js")

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


function createObjects(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x]==2) {
                var xotaker = new Xotaker(x, y, 2);
                xotakerArr.push(xotaker);
            } else if( matrix[y][x] == 1){
                var grass = new Grass (x, y, 1);
                grassArr.push(grass);
            }
            
        }
    }
 
 
}
createObjects()

let obj = {
    'matrix': matrix,
}

function game() {
    for(var i in grassArr){
        grassArr[i].mul();
    }
    for(var i in xotakerArr){
        xotakerArr[i].eat()
    }
    io.sockets.emit("draw matrix", obj);
}
setInterval(game, 1000)

function kill(){
    grassArr = [];
    xotakerArr = [];
    for (let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[0].length;x++){
            matrix[y][x] = 0
        }
        
    }
}
io.on('connection', function (socket) {  
    socket.on("spaniii", kill) ;
});