module.exports = {
  gravity = 100,
  wood = 1000,
  gold = 50,
  diamond = 10,
  //function chopwood
  chopWood: funtion() {
  //check if wood exists
    if (this.wood > 0) {
  //once wood exists and you chop the wood the wood will: decrease
      this.wood = this.wood - 1;
  //return the value
      return 1;
  //otherwise
    } else {
  //no wood avalaible, just stop the function.
        return 0;                      }
    }
 },
  findDiamond: function() {       //once you find the gold the gold in the world will:
    this.diamond = this.diamons - 1;  //"decrease"
  }
}