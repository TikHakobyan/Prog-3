let LivingCreature = require("./livingCreauture.js")
module.exports =class Grass extends LivingCreature {

    mul() {
        
        this.multiply++;
        var emptCell=this.chooseCell(0)
        var newCell = emptCell[Math.floor(Math.random()*emptCell.length)];
        if(this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0],newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}
