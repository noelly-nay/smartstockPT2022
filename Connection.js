const {MongoClient, Db} = require('mongodb');

/**
 * 
 * @param {(db: Db)=>Promise<void>} callback // (db: MongoDb)=>Promise<void>
 * @param {string} dataBaseName
 */

async function withMongoDbConnection(dataBaseName, callback){
    const connection = await new MongoClient('mongodb://localhost:27017').connect(); // get connection
    return await callback(connection.db(dataBaseName)).finally(()=>{
        connection.close().catch(console.log); // terminate connection
    }); // use connection
}

// databaseName
module.exports = {
    withMongoDbConnection
}