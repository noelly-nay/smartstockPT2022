const { queryProductsFromStocks } = require("./example3");
const { withMongoDbConnection } = require("./example4");

async function fetchStocksFromDatabase(){
    let reducedStocks = queryProductsFromStocks();
    // expandedStocks =  expandedStocks.map(x=> {
    //     x._id = x.id;
    //     return x;
    // })
    await withMongoDbConnection('smartstock', async (db)=>{
        await db.collection('stocks').mapReduce(reducedStocks);
    });
    return {message: 'done fetching stocks'}
}

fetchStocksFromDatabase().catch(console.log).finally(()=>{
    process.exit(1);
}).then(console.log);