const { expandStockInput } = require("./example1");


function expandStockInputWhenMany(items){
  const jibu = [];

  // var i = 0;
  // while(i<items.length) {
    // var k = items[i];
    for( const k of items){
      const j = expandStockInput(k);
      jibu.push(...j); // this is called spreading ...
   }
    // i++;
  // }

  return jibu;
}


module.exports = {
  expandStockInputWhenMany
}