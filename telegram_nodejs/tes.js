
const url ="mongodb+srv://user3:user2@cluster0.meaflsf.mongodb.net/?retryWrites=true&w=majority"


var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const { hostname } = require('os');
// const url = "mongodb://127.0.0.1:27017/";

mongoose.connect(url);


var myid = 6285244303838 ;
const mydb="data_smk"
const mycoll = "siswa"

console.log(myid);
  // const conten = msg.body.toLowerCase();
  
     MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db(mydb);
        var query = { NHP : '6285244303838' };
        dbo.collection(mycoll).find(query).toArray(function(err, result) {
          if (err) throw err;//////////////////
          console.log(result[0].ID);
          console.log(result.length);
          console.log(result);
    
          
//     // if (result.length >= 1){
//     //   const ids =result[0].ids
//     //       const id =result[0].ID
//     //       const nama =result[0].nama
//     //       const kelas =result[0].kelas
//     //       const nohp =result[0].NHP
//     //     msg.reply(`anda sudah terdaftar  \nids : ${ids} \nID : ${id} \nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp} \n\n`)     
//         //   client.sendMessage(msg.from, '`anda sudah terdaftar  \nids : ${ids} \nID : ${id} \nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp} \n\nUbah nowa format ketik : \n/nowa 6285xxxxxxxxx`');
// // client.sendMessage(msg.from,'anda sudah terdaftar');
// console.log('anda sudah terdaftar');
//       } else{
// client.sendMessage(msg.from,'Maaf ,anda belum terdaftar')
// //          console.log('MESSAGE RECEIVED', msg.body);
// console.log('anda belum terdaftar');
  // client.sendMessage(msg.from, 'anda sudah terdaftar');
    //}
         ////////////////////////////////////////////////////////////////////
    
          db.close();
        });
       
      });




      var mongodb = require("mongodb");

var client = mongodb.MongoClient;
// var url = "mongodb://host:port/";

client.connect(url, function (err, client) {
    
    var db = client.db("data_smk");
    var collection = db.collection("siswa");
    
    var query = {};
    
    var cursor = collection.find(query);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});
  