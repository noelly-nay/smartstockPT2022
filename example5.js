const { expandStockInputWhenMany } = require("./example2");
const { withMongoDbConnection } = require("./example4");
const { stockItems } = require("./mocks");

async function saveStocksToDatabase(stocks){
    let expandedStocks = expandStockInputWhenMany(stocks);
    expandedStocks =  expandedStocks.map(x=> {
        x._id = x.id;
        return x;
    })
    await withMongoDbConnection('smartstock', async (db)=>{
        await db.collection('stocks').insertMany(expandedStocks);
    });
    return {message: 'done save stocks'}
}

saveStocksToDatabase(stockItems).catch(console.log).finally(()=>{
    process.exit(1);
}).then(console.log);