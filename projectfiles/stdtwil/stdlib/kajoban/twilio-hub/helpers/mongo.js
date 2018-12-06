const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://western:Pass4now!@cluster0-otjkb.mongodb.net/test?retryWrites=true';

// Database Name
const dbName = 'western';
const client = new MongoClient(url);

function getData(date)
{
// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    findDocument(db,date,function() {
      client.close();
    });
  });
}

const findDocument = function(db, date, callback) {
    // Get the documents collection
    const col = db.collection('hack');
    // Find some documents
    col.find({"obj.date": { $eq : "2018-11-24"}}).toArray(function(err, res) {
        if(err){
            console.log("ERROR: " + err)
        } else {
            console.log("Found the following records");
            console.log(res)
            return res;
        }
    })
  }


function insertData(data)
{
// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    insertDocuments(db,data,function() {
      client.close();
    });
  });
}

function insertMany(arr){
  client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    insertArr(db, arr, function(){
      client.close();
    });
  });
}

const insertArr = function(db, data, callback){
  const collection = db.collection('hack');

  collection.insertMany(data, function(err, result){
    console.log(result)
  })
}

const insertDocuments = function(db, data,callback) {
    // Get the documents collection
    const collection = db.collection('hack');
    let obj = JSON.parse(data);
    // Insert some documents
    collection.insertOne({obj}, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Inserted 1 document into the collection");
      callback(result);
      return result;
    });
}

function getAll(callback)
{
    client.connect(function(err){
        assert.equal(null, err)
        console.log("Connected successfully to server")
        const db = client.db(dbName);
        getDocuments(db, function(err, documents){
            callback(null, documents);
        });
    });
}
 const getDocuments = function(db, callback)
{
    const col = db.collection('hack');
    col.find().sort({"obj.date":-1}).limit(10).toArray(function(err, res)
    {
        if(err){
            console.log("ERROR: " + err)
        } else {
            console.log("Found the following records");
            return callback(null, res);
        }
    });
    
}

let current = new Date().toLocaleString(undefined, {
	day: 'numeric',
	month: 'numeric',
	year: 'numeric'
});
let a =JSON.stringify(current);

//insertData(`{"date": ${a}, "diet":5, "exercise":6, "sleep":12, "mood":4}`);
//getData("2018-11-24");
// getAll();

module.exports.insertData = insertData;
module.exports.getData = getData;
module.exports.insertMany = insertMany;
module.exports.getAll = getAll;

