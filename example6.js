const { queryProductsFromStocks } = require("./example3");
const { withMongoDbConnection } = require("./example4");

async function fetchStocksFromDatabase(){
    const docs = await withMongoDbConnection('smartstock', async (db)=>{
        return await db.collection('stocks').find({}).toArray();
    });
    return queryProductsFromStocks(docs);
}

fetchStocksFromDatabase().catch(console.log).then(console.log);