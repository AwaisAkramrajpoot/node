const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
 
const client = new MongoClient(url);
const database = 'e-comm'


async function dbconnect() {
   
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let response = await collection.find({name:'Awais'}).toArray();
    // console.log(response);
    //Awais
}

module.exports= dbconnect;