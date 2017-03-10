//make the link with other file
var game = require('./game.js')

//initialize the var wood
var wood = 0;

//once Carl chop wood a new wood block comes
wood += game.chopWood();

//print the current value of blocks
console.log("Carl has " +wood+ " block(s) of wood")