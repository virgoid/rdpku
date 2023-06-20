
const url ="mongodb+srv://user3:user2@cluster0.meaflsf.mongodb.net/?retryWrites=true&w=majority"


var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const { hostname } = require('os');
// const url = "mongodb://127.0.0.1:27017/";

mongoose.connect(url);


// var myid = 6285244303838 ;
// const mydb="data_smk"
// const mycoll = "siswa"

// console.log(myid);
//   // const conten = msg.body.toLowerCase();
  
//      MongoClient.connect(url, function(err, db) {
//         // if (err) throw err;
//         var dbo = db.db(mydb);
//         var query = { NHP : '6285244303838' };
//         dbo.collection(mycoll).find(query).toArray(function(err, result) {
//           if (err) throw err;//////////////////
//           console.log(result[0].ID);
//           console.log(result.length);
//           console.log(result);
    
    
//           db.close();
//         });
       
//       });




    //   var mongodb = require("mongodb");

// var client = mongodb.MongoClient;
// var url = "mongodb://host:port/";

var key = "2a"
var keynum = key.match(/^\d+/g)
var keysting = keynum.toString();

console.log(keynum);
console.log(keysting);



MongoClient.connect(url, function(err, cdb) {
    
    var db = cdb.db("data_smk");
    var collection = db.collection("jawab");
    
    var query = {jawab : {$regex: keysting, $options: 'i' }};
    
    var cursor = collection.find(query);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            cdb.close();
        }
    );
    

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});

// var a = '1a'
var b = key.match(/^\d+/g)
console.log(b['0']);
  