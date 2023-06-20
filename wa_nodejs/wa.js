const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const { body, validationResult } = require('express-validator');
const socketIO = require('socket.io');
const qrcode = require('qrcode');
const http = require('http');
const fs = require('fs');
const { phoneNumberFormatter } = require('./helpers/formatter');
const fileUpload = require('express-fileupload');
const axios = require('axios');
const mime = require('mime-types');
const bodyParser = require('body-parser');
// const Markup = require('markup')




var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
// const { hostname } = require('os');
// const url = "mongodb://127.0.0.1:27017/";
const url ="mongodb+srv://user3:user2@cluster0.meaflsf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url);

var db1 = mongoose.connection
db1.on('error', console.error.bind(console, 'connection error:'));
db1.once('open', function() { 
  console.log('connection mogodb success'); 
});







const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/**
 * BASED ON MANY QUESTIONS
 * Actually ready mentioned on the tutorials
 * 
 * Many people confused about the warning for file-upload
 * So, we just disabling the debug for simplicity.
 */
app.use(fileUpload({
  debug: true
}));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname
  });
});

app.post('/send', (req, res) => {
  const phone = req.body.phone;
  const message = req.body.message;

  console.log(req.body);

  client.sendMessage(phone, message)
    .then(response => {
      res.status(200).json({
        error: false,
        data: {
          message: 'Pesan terkirim',
          meta: response,
        },
      });
    })
    .catch(error => {
      res.status(200).json({
        error: true,
        data: {
          message: 'Error send message',
          meta: error,
        },
      });
    });
});


const client = new Client({
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // <- this one doesn't works in Windows
      '--disable-gpu'
    ],
  },
  authStrategy: new LocalAuth()
});




var myid = 6285244303838 ;
const mydb="data_smk"
const mycoll = "siswa"


function upload(id) { 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    /*Return only the documents with the address "Park Lane 38":*/
    var query = { id : id };
    dbo.collection('upload').find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });  
  return result; 
} 



client.on('message', msg => {
  const conten = msg.body.toLowerCase();
  console.log(conten)
 
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];
  const  key2 = conten.split(' ')[2];
  const  key21 = msg.body.split(' ')[2];
  const  key3 = conten.split(' ')[3];
  const  key31 = msg.body.split(' ')[3];
  const NHP = msg.from.split('@')[0]; 

  if (conten == 'ping') {
    msg.reply('pong');
  } else if (key == 's') {
     MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db(mydb);
        var query = { NHP : NHP ,setNHP : 0};
        dbo.collection("siswa").find(query).toArray(function(err, result) {
          // if (err) throw err;
        ////////////////////////////////////////////////////
          // console.log(result[0].ID);
          // console.log(result.length);
          console.log(result);
    
          
    if (result.length >= 1){

// console.log('ditemukan!');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var query = { NHP : NHP ,setNHP : 0};
    var newvalues = {$set: { NHP : NHP ,setNHP : 1} };
    dbo.collection("siswa").updateMany(query, newvalues, function(err, res) {
      if (err) throw err;
      console.log(res.result.nModified + " document(s) updated");
      db.close();
    });
  });


      } else{

console.log('anda sudah update');
  client.sendMessage(msg.from, 'data sudah update');
    }
         ////////////////////////////////////////////////////////////////////
    
          // db.close();
        });
       
      });
  } else if (conten == '!groups') {
    client.getChats().then(chats => {
      const groups = chats.filter(chat => chat.isGroup);

      if (groups.length == 0) {
        msg.reply('You have no group yet.');
      } else {
        let replyMsg = '*YOUR GROUPS*\n\n';
        groups.forEach((group, i) => {
          replyMsg += `ID: ${group.id._serialized}\nName: ${group.name}\n\n`;
        });
        replyMsg += '_You can use the group id to send a message to the group._'
        msg.reply(replyMsg);
      }
    });
  
  

  }else if (key == 'ceks') {
    if (key1 == undefined){
    //   msg.reply(`soal <nomot>`);
    //   return false
    // }
         MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db(mydb);
        var query = { NHP : NHP };
        dbo.collection("siswa").find(query).toArray(function(err, result) {
          // if (err) throw err;
        ////////////////////////////////////////////////////
          // console.log(result[0].ID);
          // console.log(result.length);
          // console.log(result);        
        if (result.length >= 1){
           const ids =result[0].ids
          const id =result[0].ID
          const nama =result[0].nama
          const kelas =result[0].kelas
          const nohp =result[0].NHP
          const setNHP =result[0].setNHP
          const setID =result[0].setID
          msg.reply(`anda sudah terdaftar  \nids : ${ids} \nID : ${id}   (${setID})\nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp}   (${setNHP})\n\n`)     
           //   client.sendMessage(msg.from, '`anda sudah terdaftar  \nids : ${ids} \nID : ${id} \nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp} \n\nUbah nowa format ketik : \n/nowa 6285xxxxxxxxx`');
          // client.sendMessage(msg.from,'anda sudah terdaftar');
          console.log('anda sudah terdaftar');
                } else{
          client.sendMessage(msg.from,'Maaf ,anda belum terdaftar')
          //          console.log('MESSAGE RECEIVED', msg.body);
          console.log('anda belum terdaftar');
            // client.sendMessage(msg.from, 'anda sudah terdaftar');
         }
         ////////////////////////////////////////////////////////////////////
    
          db.close();
        }); });

    }else{

      MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db(mydb);
        var query = { ids : Number(key1) };
        dbo.collection("siswa").find(query).toArray(function(err, result) {
          // if (err) throw err;
        ////////////////////////////////////////////////////
          // console.log(result[0].ID);
          // console.log(result.length);
          // console.log(result);        
        if (result.length >= 1){
           const ids =result[0].ids
          const id =result[0].ID
          const nama =result[0].nama
          const kelas =result[0].kelas
          const nohp =result[0].NHP
          const setNHP =result[0].setNHP
          const setID =result[0].setID
          msg.reply(`id sudah terdaftar  \nids : ${ids} \nID : ${id}   (${setID})\nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp}   (${setNHP})\n\n`)     
           //   client.sendMessage(msg.from, '`anda sudah terdaftar  \nids : ${ids} \nID : ${id} \nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp} \n\nUbah nowa format ketik : \n/nowa 6285xxxxxxxxx`');
          // client.sendMessage(msg.from,'anda sudah terdaftar');
          console.log('id sudah terdaftar');
                } else{
          client.sendMessage(msg.from,'Maaf ,id belum terdaftar')
          //          console.log('MESSAGE RECEIVED', msg.body);
          console.log('id belum terdaftar');
            // client.sendMessage(msg.from, 'anda sudah terdaftar');
         }
         ////////////////////////////////////////////////////////////////////
    
          db.close();
        }); });






    }

  }else if (key == 'qrs') {

  const NHP = msg.from.split('@')[0]; 
  const conten      = msg.body.toLowerCase();
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];

  // const media1 = MessageMedia.fromFilePath('./qrcode1/'+ids+'.jpg');
  // console.log(media1);
  // client.sendMessage(msg.from, media1,{caption: 'image' });
  // chat.sendMessage(media1, {caption: 'this is my caption'}
  MongoClient.connect(url, function (err, client2) {   //user .find({ID:myid})
      var db = client2.db('data_smk');
      var query = { NHP : NHP };
      var selext = { _id: 1,  NHP: 1, ID  : 1,nis: 1 , nama  : 1, kelas :1 , alamat :1};
      db.collection('siswa').find((query), { projection: (selext)  }).toArray(function(err, docs) {
          // db.collection("user").find({ID:ID}).toArray(function (err, docs) {
          console.log(docs); 
          if (!docs.length >= 1){console.log('belum terdaftar');}else{
              console.log(docs)
              const nama = docs['0']['nama'];
              const kelas = docs['0']['kelas'];
              const alamat = docs['0']['alamat'];
              const ket = docs['0']['ket'];
              const ID = docs['0']['ID'];
              const ids = docs['0']['ids'];

              //////////////////////////////////////////////////


              // const part1 ='C:\\Users\\1974a\\Desktop\\telegram_bot_js\\cryptobot\\qrcode\\';
              const QRCode = require('qrcode');
              const opts = {
                  errorCorrectionLevel: 'H',
                  type: 'terminal',
                  quality: 0.95,
                  margin: 1,
                  color: {
                      dark: '#208698',
                      light: '#FFF',
                  },
              };

              let stringdata = JSON.stringify(docs['0']);
              const keywod ='data';
              const base64data = Buffer.from(stringdata).toString('base64');
              const base64dt = keywod+base64data;

              console.log(base64dt);


              const dirpath ='./qrcode1/';
              if (!fs.existsSync(dirpath)){
                  fs.mkdirSync(dirpath);
              }




              const dataPath ='./qrcode1/'+ids+'.jpg';

              if (key1 === 'set'){
                  fs.unlink(dataPath, (err) => {
                      if (err) {
                          console.error(err);
                      }
                  }); //delete
                  client.sendMessage(msg.from,'qr has set');
                  return false;
              }


              if(!fs.existsSync(dataPath)){
      
                  QRCode.toFile('./qrcode1/'+ids+'.jpg',base64data, opts);
                  msg.reply('created');
              }else{
                  const media1 = MessageMedia.fromFilePath('./qrcode1/'+ids+'.jpg');
                  // console.log(media1);
                  client.sendMessage(msg.from, media1, {caption: 'By @ SMK Negeri 2 palopo' });
                  // tbot.sendPhoto(ID,'./qrcode1/'+ID+'.jpg');
              }
              // const file = ID+'.png'


              // tbot.sendPhoto(ID,'./qrcode1/'+ID+'.jpg')
              // tbot.sendMessage(myid,qrImage)
              // tbot.sendPhoto(ID,part1+ID+'.jpg',{caption: "judul"});
              // console.log(part1+ID+'.jpg');
              // console.log('./qrcode1/'+ID+'.jpg');



          }});});  //user .find({ID:myid}) 
  }else if (key == 'reset') {  //setNHP = 0


      //  client.sendMessage(msg.from, 'proses reg');
     
            
              if (key1 == undefined || key2 == undefined){
                msg.reply(` reset wa <ids>\nreset telg <ids>`);
                // ctx.reply(` ${key}\nnama= \nkelas= \njurusan= \njurusan= \nalamat= \nemail= \ngrup=A`);
                return false
            }else if(key1 == 'wa'){

            MongoClient.connect(url, function(err, db) {
              if (err) throw err;
              var dbo = db.db('data_smk');
              // var nhp = NumberLong(created_by)
              var myquery = { ids : key2,setNHP : 1 };
              var newvalues = { $set: {setNHP : 0 } };
              dbo.collection('siswa').updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
              //   console.log(res['modifiedCount'])
                console.log(res['modifiedCount']+" document updated");
                msg.reply(res['modifiedCount']+" document updated");
                client.sendMessage(msg.from,res['modifiedCount']+" document updated");
              });
            });
          }else if(key1 == 'telg'){
            MongoClient.connect(url, function(err, db) {
              if (err) throw err;
              var dbo = db.db('data_smk');
              // var nhp = NumberLong(created_by)
              var myquery = { ids: key1,ID : 1 };
              var newvalues = { $set: {setID : 0 } };
              dbo.collection('siswa').updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
              //   console.log(res['modifiedCount'])
                console.log(res['modifiedCount']+" document updated");
                msg.reply(res['modifiedCount']+" document updated");
                client.sendMessage(msg.from,res['modifiedCount']+" document updated");
              });
            });



          }




          
  }else if(key == 'qrss'){
  
  const QRLogo = require('qr-with-logo');
  MongoClient.connect(url, function (err, client11) {   //user .find({ID:myid})
    var db = client11.db("data_smk");
    var query = { NHP : NHP };
    var selext = { _id: 1, ids:1, ID: 1, NHP:1 ,nis:1, nisn:1, nama: 1, kelas :1 , alamat :1}
    db.collection('siswa').find((query), { projection: (selext)  }).toArray(function(err, docs) {
    // db.collection("user").find({ID:ID}).toArray(function (err, docs) {
    // console.log(docs); 
      if (!docs.length >= 1){console.log("belum terdaftar");msg.reply('anda belum terdaftar di siswa');}else{
        console.log(docs)
      const nama = docs['0']['nama']
      const kelas = docs['0']['kelas']
      const alamat = docs['0']['alamat']
      const ket = docs['0']['ket']
      const ids = docs['0']['ids']

      const dirpath ='./qr/';
      if (!fs.existsSync(dirpath)){
          fs.mkdirSync(dirpath);
      }


  const dataPath ='./qr/'+ids+'.png';

  let stringdata = JSON.stringify(docs['0'])
  const base64data = Buffer.from(stringdata).toString('base64')

  // const keywod ="data"
  // const base64dt = keywod+base64data
  
  console.log(base64data)


  if (key1 === 'update'){
    if(fs.existsSync(dataPath)){   
        fs.unlink(dataPath, (err) => {
          if (err) {
            console.error(err)
          }
        }) //delete
  msg.reply('ready update')
  return false
  }else{
    msg.reply('no found')
    return false
  }
}
  if(!fs.existsSync(dataPath)){   
    msg.reply('create')  ///ok
  //       const data = JSON.stringify({name: "Zacharie Happel",
  //               job:  "Student/Intern", 
  //               grade: "Senior"
  // })

   var opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    quality: 0.9,
    margin: 1,
    color: {
      dark: '#0c0d0d',
      light: '#FFF'
     
    }
  }
  
  QRLogo.generateQRWithLogo(base64data, "logo/node-js-logo.png", opts, "PNG", 'qr/'+ids+'.png', async function(b64) {
    console.log("Base64: \n" + b64);
    msg.reply('created');
});


      }else{
    
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let yr = date_ob.getFullYear();
    
        
        const media1 = MessageMedia.fromFilePath('./qr/'+ids+'.png');
        
        client.sendMessage(msg.from, media1, {caption: `ids:${ids}  ${date}.${month}.${yr}@smkn2palopo`});
//===============delete===============================================
        const path = require("path");
// const fs = require("fs");

fs.readdir("./", (err, files) => {
	if (err) {
		console.log(err);
	}

    const extensions = ['.png'];

	files.forEach((file) => {
		const fileDir = path.join("./", file);
        // Get the extension name of the file, lowercase it, then see if it is in the array of extensions
        // defined above. If so, remove it.
		if (extensions.includes(path.extname(file).toLowerCase())) {
			fs.unlinkSync(fileDir);
		}
	});
});
//========================================================================
      }
   

}})});  //user .find({ID:myid}) 
  }else if (conten == 'tugas') {
            
    MongoClient.connect(url, function(err, db) {
      // if (err) throw err;
      var dbo = db.db(mydb);
      var query = { NHP : NHP };
      dbo.collection("siswa").find(query).toArray(function(err, result) {
        // if (err) throw err;
      ////////////////////////////////////////////////////
        // console.log(result[0].ID);
        // console.log(result.length);
        // console.log(result);
  
        
  if (result.length >= 1){
    const ids =result[0].ids
        const id =result[0].ID
        const nama =result[0].nama
        const urldoc =result[0].url_doc
        const nohp =result[0].NHP
        const setNHP =result[0].setNHP
        const setID =result[0].setID
  

var request = require('request');
var options = {
  'method': 'POST',
  'url': "http://localhost:8000/send-media",
  'headers': {
  },
  formData: {
    'number': NHP,
    'caption': 'caption',
    'file': urldoc
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body.status);
});




/////////////////////////////////////////////////////////////
console.log('anda sudah terdaftar');
    } else{
client.sendMessage(msg.from,'Maaf ,anda belum terdaftar')
//          console.log('MESSAGE RECEIVED', msg.body);
console.log('anda belum terdaftar');
// client.sendMessage(msg.from, 'anda sudah terdaftar');
  }
       ////////////////////////////////////////////////////////////////////
  
        db.close();
      });
     
    });
  }else if (key == 'soal') {
            
    if (key1 == undefined){
      msg.reply(`soal <nomot>`);
      return false
    }

    MongoClient.connect(url, function(err, db) {
      // if (err) throw err;
      var dbo = db.db(mydb);
      var query = { NHP : NHP };
      dbo.collection("siswa").find(query).toArray(function(err, result) {
        // if (err) throw err;
      ////////////////////////////////////////////////////
        // console.log(result[0].ID);
        // console.log(result.length);
        // console.log(result);
  
        
  if (result.length >= 1){
    const ids =result[0].ids
        const id =result[0].ID
        const nama =result[0].nama
        const urldoc =result[0].url_doc
        const nohp =result[0].NHP
        const setNHP =result[0].setNHP
        const setID =result[0].setID
        const url ="https://datawa.smkn2-palopo.sch.id/soal/"
        

        var request = require('request');
        var options = {
          'method': 'POST',
          'url': "http://localhost:8000/send-media",
          'headers': {
          },
          formData: {
            'number': NHP,
            'caption': `contoh: jawab 1a `,
            'file': `${url}${key1}.JPG`
          }
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          // console.log(response.body.status);
            console.log("sent file");

        });




        /////////////////////////////////////////////////////////////
        console.log('anda sudah terdaftar');
            } else{
        client.sendMessage(msg.from,'Maaf ,anda belum terdaftar')
        //          console.log('MESSAGE RECEIVED', msg.body);
        console.log('anda belum terdaftar');
        // client.sendMessage(msg.from, 'anda sudah terdaftar');
          }
              ////////////////////////////////////////////////////////////////////
          
                db.close();
              });
            
            });
 
 
  }else if (key == 'jawab') {

    if (key1 == undefined){
      msg.reply(`jawab <nomot>`);
      return false
    }

    MongoClient.connect(url, function(err, db) {  //sbg siswa
      // if (err) throw err;
      var dbo = db.db(mydb);
      var query = { NHP : NHP };
      dbo.collection("siswa").find(query).toArray(function(err, result) {
        // if (err) throw err;
      ////////////////////////////////////////////////////
        // console.log(result[0].ID);
        // console.log(result.length);
        // console.log(result);
  
        
  if (result.length >= 1){
    const ids =result[0].ids
        const id =result[0].ID
        const nama =result[0].nama
        const urldoc =result[0].url_doc
        const nohp =result[0].NHP
        const setNHP =result[0].setNHP
        const setID =result[0].setID

        // const keya = key1.match(/^\d+/g)

        var keynum = key1.match(/^\d+/g)  // ambil number
        var keysting = keynum.toString();  // menguba sting

        console.log(keynum);
        console.log(keysting);

        
          MongoClient.connect(url, function(err, db) {  
            if (err) throw err;
            var dbo = db.db("soal");
            var query2 = { jawab :  {$regex: keysting, $options: 'i' }};
            dbo.collection("jawab").find(query2).toArray(function(err, result1) {


            if (!result1.length >= 1){
         ///////////////////////////////////////////////////////////////
                MongoClient.connect(url, function(err, db2) {
                  if (err) throw err;
                  
                  var dbo = db2.db("soal");
                  var query = { ids :ids , NHP : NHP ,jawab : key1};
                  dbo.collection("jawab").insertOne(query, function(err, res) {
                    if (err) throw err;
                    
                    console.log("1 soal di jawab");
                    client.sendMessage(msg.from,'1 soal di jawab')
                    db.close();
                  });
                });
            /////////////////////////////////////////////////////
            MongoClient.connect(url, function(err, db) {  
              if (err) throw err;
              var dbo = db.db("soal");
              var query3 = { jawab : key1};
              dbo.collection("kunci").find(query3).toArray(function(err, result1) {
   
              if (result1.length >= 1){
                          MongoClient.connect(url, function(err, db2) {
                            if (err) throw err;
                            
                            var dbo = db2.db("soal");
                            var query = { ids :ids , NHP : NHP ,benar : 1 };
                            dbo.collection("hasil").insertOne(query, function(err, res) {
                              if (err) throw err;
                              
                              console.log("jawaban anda benar");
                              client.sendMessage(msg.from,'jawaban anda benar')
                              db.close();
                            });
                          });


                          }else{

                            console.log("jawaban anda salah");
                            client.sendMessage(msg.from,'jawaban anda salah')
                          }
            
            
            
            })}) 
              //////////////////////////////////////////////////////////////

              }else {
                client.sendMessage(msg.from,`Maaf soal no ${keynum} ,sudah di jawab`)
              }


                     
          
          });
          });


       


/////////////////////////////////////////////////////////////
console.log('anda sudah terdaftar');
    } else{
client.sendMessage(msg.from,'Maaf ,anda belum terdaftar')
//          console.log('MESSAGE RECEIVED', msg.body);
console.log('anda belum terdaftar');
// client.sendMessage(msg.from, 'anda sudah terdaftar');
  }
       ////////////////////////////////////////////////////////////////////
  
        db.close();
      });
     
    });

  }else if (conten == 'hasil') {

  MongoClient.connect(url, function(err, db) {  //sbg siswa
    // if (err) throw err;
    var dbo = db.db("soal");
    var query = { NHP : NHP };
    dbo.collection("hasil").find(query).toArray(function(err, result) {
      // if (err) throw err;
    ////////////////////////////////////////////////////
      // console.log(result[0].ID);
      // console.log(result.length);
      // console.log(result);
      var cont = result.length;
      client.sendMessage(msg.from,`Jawaban benar : ${cont} `)
      
// if (result.length >= 1){

// }

})})

  }else if (key == 'media') {

  if (key1 == undefined){
    msg.reply(`media <token>`);
    return false
  }

  // var key1 = 133
  MongoClient.connect(url, function (err, clie) { 
  var db = clie.db("data_smk");
  var query = {token : "token_img"};
      db.collection("token").find(query).toArray(function (err, docs) {
      // console.log(docs['0']['token_img']); 
      // console.log(docs['0']['res']); 
      var token1= docs['0']['res']
          if (key1 != token1 ){
            // console.log("Token anda salah");
            msg.reply(`token anda masukkan salah`);}else{
              // console.log("ok")
         
      MongoClient.connect(url, function(err, cdb) {    
      var db = cdb.db("data_smk");
      var collection = db.collection("media");
      
      var query = {show : 1};
      var projection = {"url": 1.0, "_id": 0.0 };   
      var cursor = collection.find(query).project(projection);
      cursor.forEach(
          function(doc) {
             console.log(doc['url']);
             var urlmedia = doc['url']
          ///////////////////////////////////////////////////////
          
            var request = require('request');
            var options = {
              'method': 'POST',
              'url': "http://localhost:8000/send-media",
              'headers': {
              },
              formData: {
                'number': NHP,
                'caption': 'media',
                'file': urlmedia
              }
            };
            request(options, function (error, response) {
              if (error) throw new Error(error);
              // console.log(response.body.status);
              console.log("send");
            });


          /////////////////////////////////////////////////////////




          }, 
          function(err) {
              cdb.close();
          }
      );
          });
          }})
     })






  }else if (key == 'token') {
            
      if (key1 == undefined){
        msg.reply(`token show|img|reset|reg <nilai>`);
        return false
      }

      MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db(mydb);
        var query = { NHP : NHP };
        dbo.collection("admin").find(query).toArray(function(err, result) {
          // if (err) throw err;
        ////////////////////////////////////////////////////
          // console.log(result[0].ID);
          // console.log(result.length);
          // console.log(result);

          
    if (result.length >= 1){
      const ids =result[0].ids
          const id =result[0].ID
          const nama =result[0].nama


    if (key1 == "show"){

      MongoClient.connect(url, function(err, cdb) {    
        var db = cdb.db("data_smk");
        var collection = db.collection("token");
        
        var query = {};
        var projection = {"_id": 0.0 };   
        var cursor = collection.find(query).project(projection);
        cursor.forEach(
            function(doc) {
              console.log(doc["token"] , doc["res"] );
              var res1= doc["token"] 
              var res2 = doc["res"]
              client.sendMessage(msg.from,`${res1} : ${res2}`)
            }, 
            function(err) {
                cdb.close();
            }
        );
            });

     }else if(key1 == "img" ){  
                MongoClient.connect(url, function(err, db) {
                  if (err) throw err;
                  var dbo = db.db(mydb);
                  var query = {token : "token_img"};
                  var newvalues = {$set: { res : key2 } };
                  dbo.collection("token").updateOne(query, newvalues, function(err, res) {
                    if (err) throw err;
                   console.log(res.modifiedCount + " document(s) updated");
                   var res =(res.modifiedCount + " document(s) updated");
                   client.sendMessage(msg.from,res)
                    db.close();
                  });
                });
    }else if(key1 == "reg" ){  
                MongoClient.connect(url, function(err, db) {
                  if (err) throw err;
                  var dbo = db.db(mydb);
                  var query = {token : "token_reg"};
                  var newvalues = {$set: { res : key2 } };
                  dbo.collection("token").updateOne(query, newvalues, function(err, res) {
                    if (err) throw err;
                   console.log(res.modifiedCount + " document(s) updated");
                   var res =(res.modifiedCount + " document(s) updated");
                   client.sendMessage(msg.from,res)
                    db.close();
                  });
                });
    }else if(key1 == "reset" ){  
                MongoClient.connect(url, function(err, db) {
                  if (err) throw err;
                  var dbo = db.db(mydb);
                  var query = {token : "token_reset"};
                  var newvalues = {$set: { res : key2 } };
                  dbo.collection("token").updateOne(query, newvalues, function(err, res) {
                    if (err) throw err;
                   console.log(res.modifiedCount + " document(s) updated");
                   var res =(res.modifiedCount + " document(s) updated");
                   client.sendMessage(msg.from,res)
                    db.close();
                  });
                });
    }


      /////////////////////////////////////////////////////////////
      // console.log('anda sudah terdaftar');
          } else{
      client.sendMessage(msg.from,'Maaf ,anda belum terdaftar')
      console.log('anda belum terdaftar');
      
        }
            ////////////////////////////////////////////////////////////////////
        
              db.close();
            });
          
          });
  

  } else if (key == 'regs') {

          if (key1 == undefined || key2 == undefined){
            msg.reply(` regs <ids> <token>`);
            // ctx.reply(` ${key}\nnama= \nkelas= \njurusan= \njurusan= \nalamat= \nemail= \ngrup=A`);
            return false
          }      
  MongoClient.connect(url, function (err, clie) { 
  var db = clie.db("data_smk");
  var query = {token : "token_reg"};
      db.collection("token").find(query).toArray(function (err, docs) {
      // console.log(docs['0']['res']); 
      var token1= docs['0']['res']

      if( key2 == token1){

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = {ids : Number(key1)};
        var newvalues = {$set: { NHP : NHP } };
        dbo.collection("siswa").updateOne(query, newvalues, function(err, res) {
          if (err) throw err;
         console.log(res.modifiedCount + " document(s) updated");
         var res =(res.modifiedCount + " document(s) updated");
         client.sendMessage(msg.from,res)
          db.close();
        });
      });
    }else{
      client.sendMessage(msg.from,'token anda salah')

    }




      })})

  }else if (key == 'send') {

        if (key1 == undefined){
          msg.reply(`send <kelas> <namakelas> <idmedia>`);
          return false
        }
      
        // var key1 = 133
        MongoClient.connect(url, function (err, clie) { 
        var db = clie.db("data_smk");
        var query = {NHP : NHP};
            db.collection("admin").find(query).toArray(function (err, docs) {
            // console.log(docs['0']['token_img']); 
            // console.log(docs['0']['res']); 
            // var token1= docs['0']['res']
                // if (key1 != token1 ){
      if (!docs.length >= 1){
                  // console.log("Token anda salah");
                  msg.reply(`adan tidak ada akses`);}else{
                    // console.log("ok")
               


         if ( key1 == 'kelas'){

          // var     key1 = "kelas"
          // var     key2 = 'XAPL'
            //  var     key3  = '13613'
       MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("data_smk");
       /*Return only the documents with the address "Park Lane 38":*/
       var query = { id : key3};
       dbo.collection('upload').find(query).toArray(function(err, result) {
           if (!result.length >= 1){

         console.log("link tidak ada");   
         msg.reply(`link media ${key3}  tidak ada`)           
   //   var uurl =   result['0']['url']
           }else{
               console.log(result['0']['url']);
               var urll= (result['0']['url']);

               MongoClient.connect(url, function (err, client3) {
                   var db = client3.db("data_smk");
                   var collection = db.collection("siswa");
                   var query = {
                       "kelas": key2.toUpperCase(),
                       "show" : 1
                   };
                   var projection = {
                       "_id": 0.0,
                       "NHP": 1.0
                   };
                   var cursor = collection.find(query).project(projection);
                   cursor.forEach(
                       function(doc) {
                          //  console.log(doc['NHP']);
                           var nnhp = doc['NHP']
                           console.log(nnhp);
                          //  console.log(urll);
///////////////////////////////////////////////////////
                           
           var request = require('request');
           var options = {
             'method': 'POST',
             'url': "http://localhost:8000/send-media",
             'headers': {
             },
             formData: {
               'number': nnhp,
               'caption': 'media',
               'file': urll
             }
           };
           request(options, function (error, response) {
             if (error) throw new Error(error);
             // console.log(response.body.status);
             console.log("send");
             msg.reply(`terkirim`)
           });
           /////////////////////////////////////////////////////////
                       }, 
                      //  function(err) {
                      //      client3.close();
                      //      console.log("Kelas tidak ada");

                      //  }
                   );
               });
           }
       })})
              }else if(key1 == "siswa"){

              }
        }
              
              })
           })
      
  }else if (key == 'cari') {
    if (key1 == undefined){
      msg.reply(`cari <kelas|nama|upload> <kewod> `);
      return false
    }

    if ( key1 == "kelas"){

          // var key2 = 'tkr'
          var key01= key21.toUpperCase()
          var keyRG = RegExp(key01,"i")
          
          // var keyRG = RegExp("^"+key2,"g")
          console.log(keyRG)
            MongoClient.connect(url, function(err, db) {  
              if (err) throw err;
              var dbo = db.db("data_smk");
              var query2 = { kelas :  {$regex: keyRG }};
              dbo.collection("siswa").find((query2),{ projection: { _id: 0, kelas: 1 } }).toArray(function(err, result1) {
          //   console.log(result1)
          
                  if (!result1.length >= 1){
                      console.log("TIDAK DI TEMUKAN");
                      client.sendMessage(msg.from,'TIDAK DI TEMUKAN')
                    }else{
                        
          
            const myJSON = JSON.stringify(result1); // msg = json
          //   console.log(myJSON)
          /////////////////////////////
            var arr = []
            try {
              arr = JSON.parse(myJSON).reduce((acc, val)=>[...acc, val.kelas], [])
            } catch (e){
              console.log("Invalid json")
            }
          //   console.log(arr)
          ///////////////////////////////////
            function unique(arr) {
              const result = [];
            
              for (const item of arr) {
                // 👉 Option 1
                if (!result.includes(item)) {
                  result.push(item);
                }
              }
            
              return result;
            }
          //   console.log(unique(arr))
          //////////////////////////////////
            var qarr =unique(arr)
            qarr.forEach(function (key) {
              var  data = key
              console.log(data)
              client.sendMessage(msg.from,data)
              })
          
          // console.log(uniqueChars);
              
              }
          })})





        }else if(key1 == "nama"){
          // var key21 = 'Suci'
          // var key01= key2.toUpperCase()
          var keyRG = RegExp(key21,"i")
          
          // var keyRG = RegExp("^"+key2,"g")
          console.log(keyRG)
            MongoClient.connect(url, function(err, db) {  
              if (err) throw err;
              var dbo = db.db("data_smk");
              var query2 = { nama :  {$regex: keyRG }};
              // var query2 = { nama :  {$regex: keyRG , $options : "i"}};
              dbo.collection("siswa").find((query2),{ projection: {  } }).toArray(function(err, result1) {
          //   console.log(result1)
          
                  if (!result1.length >= 1){
                      console.log("TIDAK DI TEMUKAN");
                      client.sendMessage(msg.from,`DATA : ${key21} , TIDAK DI TEMUKAN`)
                    }else{
                        
          
            result1.forEach(function (key) {
              var  data = key['nama']+"("+key['ids']+")"+"  kelas:" + key['kelas']
              console.log(data)
              client.sendMessage(msg.from,data)
              })
          
          
              
              }
          })})


        }else if (key1 == "upload"){

    // var key21 = 'Suci'
          // var key01= key2.toUpperCase()
          var keyRG = RegExp(key21,"g")
          
          // var keyRG = RegExp("^"+key2,"g")
          console.log(keyRG)
            MongoClient.connect(url, function(err, db) {  
              if (err) throw err;
              var dbo = db.db("data_smk");
              var query2 = { image :  {$regex: keyRG }};
              dbo.collection("upload").find((query2),{ projection: {  } }).toArray(function(err, result1) {
          //   console.log(result1)
          
                  if (!result1.length >= 1){
                      console.log("TIDAK DI TEMUKAN");
                      client.sendMessage(msg.from,`keywod : ${key21} , TIDAK DI TEMUKAN`)
                    }else{
                        
          
            result1.forEach(function (key) {
              var  data = "id: "+ key['id']+" - "+key['image']
              console.log(data)
              client.sendMessage(msg.from,data)
              })
          
          
              
              }
          })})
        
          }
  }else if ( conten == "menu")
  {
    msg.reply(`menu : \nceks,qrs,reset_,tugas,soal_\njawab_,hasil,media_,token_,regs_\nsend_,cari_`);
    

  }



}) //end
/////////////////////////////////////////////////////////////////////////////





















client.initialize();

// Socket IO
io.on('connection', function(socket) {
  socket.emit('message', 'Connecting...');

  client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.toDataURL(qr, (err, url) => {
      socket.emit('qr', url);
      socket.emit('message', 'QR Code received, scan please!');
    });
  });

  client.on('ready', () => {
    socket.emit('ready', 'Whatsapp is ready!');
    socket.emit('message', 'Whatsapp is ready!');
  });

  client.on('authenticated', () => {
    socket.emit('authenticated', 'Whatsapp is authenticated!');
    socket.emit('message', 'Whatsapp is authenticated!');
    console.log('AUTHENTICATED');
  });

  client.on('auth_failure', function(session) {
    socket.emit('message', 'Auth failure, restarting...');
  });

  client.on('disconnected', (reason) => {
    socket.emit('message', 'Whatsapp is disconnected!');
    client.destroy();
    client.initialize();
  });
});


const checkRegisteredNumber = async function(number) {
  const isRegistered = await client.isRegisteredUser(number);
  return isRegistered;
}

// Send message
app.post('/send-message', [
  body('number').notEmpty(),
  body('message').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }

  const number = phoneNumberFormatter(req.body.number);
  const message = req.body.message;

  const isRegisteredNumber = await checkRegisteredNumber(number);

  if (!isRegisteredNumber) {
    return res.status(422).json({
      status: false,
      message: 'The number is not registered'
    });
  }

  client.sendMessage(number, message).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

// Send media
app.post('/send-media', async (req, res) => {
  const number = phoneNumberFormatter(req.body.number);
  const caption = req.body.caption;
  const fileUrl = req.body.file;

  // const media = MessageMedia.fromFilePath('./image-example.png');
  // const file = req.files.file;
  // const media = new MessageMedia(file.mimetype, file.data.toString('base64'), file.name);
  let mimetype;
  const attachment = await axios.get(fileUrl, {
    responseType: 'arraybuffer'
  }).then(response => {
    mimetype = response.headers['content-type'];
    return response.data.toString('base64');
  });

  const media = new MessageMedia(mimetype, attachment, 'Media');

  client.sendMessage(number, media, {
    caption: caption
  }).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

const findGroupByName = async function(name) {
  const group = await client.getChats().then(chats => {
    return chats.find(chat => 
      chat.isGroup && chat.name.toLowerCase() == name.toLowerCase()
    );
  });
  return group;
}

// Send message to group
// You can use chatID or group name, yea!
app.post('/send-group-message', [
  body('id').custom((value, { req }) => {
    if (!value && !req.body.name) {
      throw new Error('Invalid value, you can use `id` or `name`');
    }
    return true;
  }),
  body('message').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }

  let chatId = req.body.id;
  const groupName = req.body.name;
  const message = req.body.message;

  // Find the group by name
  if (!chatId) {
    const group = await findGroupByName(groupName);
    if (!group) {
      return res.status(422).json({
        status: false,
        message: 'No group found with name: ' + groupName
      });
    }
    chatId = group.id._serialized;
  }

  client.sendMessage(chatId, message).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

// Clearing message on spesific chat
app.post('/clear-message', [
  body('number').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }

  const number = phoneNumberFormatter(req.body.number);

  const isRegisteredNumber = await checkRegisteredNumber(number);

  if (!isRegisteredNumber) {
    return res.status(422).json({
      status: false,
      message: 'The number is not registered'
    });
  }

  const chat = await client.getChatById(number);
  
  chat.clearMessages().then(status => {
    res.status(200).json({
      status: true,
      response: status
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  })
});

server.listen(port, function() {
  console.log('App running on *: ' + port);
});



