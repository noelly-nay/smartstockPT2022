const {MongoClient, Db} = require('mongodb');

/**
 * 
 * @param {(db: Db)=>Promise<void>} callback // (db: MongoDb)=>Promise<void>
 * @param {string} dataBaseName
 */

async function withMongoDbConnection(dataBaseName, callback){
    const connection = await new MongoClient('mongodb://localhost:27017').connect(); // get connection
    await callback(connection.db(dataBaseName)); // use connection
    connection.close().catch(console.log); // terminate connection
}

// databaseName
module.exports = {
    withMongoDbConnection
}