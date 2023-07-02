// const token = '5912662958:AAGACDWCFl6-PKGrW33D_qEQHkQEA8p55F0'  //coba
// var token = '5764992393:AAEVCMXm0wC0hiL6Xk9LuogL2i0Sz21Ulrk'; // smkn2plp


modul  = require('./config.js')
token =modul.token


// const token ='6108367143:AAETI9f6akPgkQ-ukhbYGxm9qeD7GUzx0nc'//plp2

const { Telegraf } = require('telegraf')
const bot = new Telegraf(token)

const axios = require('axios');



const Markup = require('markup')
const TelegramBot = require('node-telegram-bot-api');
const tbot = new TelegramBot(token);
require("dotenv").config();
var fs = require('fs');
process.env['NODE_ENV'] = 'production';
const crypto = require('crypto')

////////////////////////////////////////
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const { hostname } = require('os');
// const url = "mongodb://127.0.0.1:27017/";
const url ="mongodb+srv://user3:user2@cluster0.meaflsf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url);

var db1 = mongoose.connection
db1.on('error', console.error.bind(console, 'connection error:'));
db1.once('open', function() { 
  console.log('connection success'); 
});
var myid = 304835260 ;
// const myid = 304835260 ;
const mydb="data_smk"
const mycoll = "siswa"

const pos = "posts"
const select= "select"
const pilih= "pilih"
const sett = "settings"

var partfile = __dirname+'\\qrcode1\\.jpg';
//console.log(partfile)

// function hash (password) {
//   return hash = crypto.createHmac('sha256', 's37x')
//        .update(password)
//        .digest('hex')
//  }

////////////////

const { encrypt, decrypt } = require('./crpyto')

const hash = encrypt('irsukal')
const text = decrypt(hash)
const base64data = Buffer.from('someText').toString('base64')
// console.log(base64data)

// console.log(hash('bisminllah'))
 


bot.start((ctx) => ctx.reply('selamat datang di smkn2 palopo \n cek server ketik /cek '));


const web_link = "https://datawa.smkn2-palopo.sch.id/";
const set = "https://datawa.smkn2-palopo.sch.id/telebot/crud_setting/";
const post1 = "https://datawa.smkn2-palopo.sch.id/telebot/crud_post/index.php";
/////////////////////////////////////////////////////////
let date_time = new Date();

let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();

// get current hours
let hours = date_time.getHours();

// get current minutes
let minutes = date_time.getMinutes();

// get current seconds
let seconds = date_time.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
const  date1 =(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);





//////////////////////////////////////////////////////////

bot.command(['menu'], async (ctx) => {
  const ID = ctx.message.chat.id 
  MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
    var db = client.db("bot_telegram");
    db.collection("admin").find({ID:ID}).toArray(function (err, docs) {
    //  console.log(docs.length); 
      if (!docs.length >= 1){console.log("anda tidak memiliki akses");}else{
//////////////////////////////////////////////  
  // console.log("2.jika terdaftar")
  ctx.deleteMessage();
  ctx.reply("selamat datang", {
    reply_markup: {
      keyboard: [
                 [{ text: "main", web_app: { url: web_link } }],
                 [{ text: "post", web_app: { url: post1 } }],
                 [{ text: "sett", web_app: { url: set } }],
                 ['/pos','/set'],
                 ['/pus']
      ]

    },

  })
/////////////////////////////////        
}})});  //user .find({ID:myid})  
  
});


bot.command(['cls'], async (ctx) => {

  // ctx.reply("Silahkan Copy , isi dan kirim format ini !", { reply_markup:  { remove_keyboard: true }  })
  // return false
  tbot.sendMessage(304835260, "!", { reply_markup:  { remove_keyboard: true }  })
  return false

})  //end

/////////////////////////////////////////////////////////////

/*

bot.command(['rek'], async (ctx) => { 

  ctx.reply("siswa : /nis <nis>");
  ctx.reply("siswa : /cek ; reg= /regs <id> ; qrcode = /qrs set ; /qrs 2x");
  ctx.reply("guru : reg= /regr <id>, qrcode = /qrg set");
  ctx.reply("pegawai : reg= /regp , qrcode = /qrp set");

})


bot.command(['rq'], async (ctx) => { 


let qrcode = new QrCodeWithLogo({
  canvas: document.getElementById("canvas"),
  content: "https://github.com/zxpsuper",
  width: 380,
  //   download: true,
  image: document.getElementById("image"),
  logo: {
    src: "https://avatars1.githubusercontent.com/u/28730619?s=460&v=4"
  }
});
 
qrcode.toCanvas().then(() => {
  qrcode.toImage().then(() => {
    setTimeout(() => {
      qrcode.downloadImage("hello world");
    }, 2000);
  });
});

})



///////////////////////////////////////////////////
bot.command(['regr'], async (ctx) => { 
  const content = ctx.message.text
  const ID = ctx.message.chat.id 
  const USER =ctx.message.from.username
  const  key1 = content.split(' ')[1];

  if (key1 == undefined){
    ctx.reply(` /regr id`);
    // ctx.reply(` ${key}\nnama= \nkelas= \njurusan= \njurusan= \nalamat= \nemail= \ngrup=A`);
    return false
}

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('data_smk');
    var myquery = { ids: Number(key1),setID : 0 };
    var newvalues = { $set: {ID: ID, setID : 1 } };
    dbo.collection('guru').updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log(res['modifiedCount'])
      console.log(res['modifiedCount']+" document updated");
      ctx.reply(res['modifiedCount']+" document updated");
      db.close();
    });
  });



})

///////////////////////////////////////////////////
bot.command(['regs'], async (ctx) => { 
  const content = ctx.message.text
  const ID = ctx.message.chat.id 
  const USER =ctx.message.from.username
  const  key1 = content.split(' ')[1];

  if (key1 == undefined){
    ctx.reply(` /regs id`);
    // ctx.reply(` ${key}\nnama= \nkelas= \njurusan= \njurusan= \nalamat= \nemail= \ngrup=A`);
    return false
}

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('data_smk');
    var myquery = { ids: Number(key1),setID : 0 };
    var newvalues = { $set: {ID: ID, setID : 1 } };
    dbo.collection('siswa').updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log(res['modifiedCount'])
      console.log(res['modifiedCount']+" document updated");
      ctx.reply(res['modifiedCount']+" document updated");
      db.close();
    });
  });



})

bot.command(['regp'], async (ctx) => { 
  const content = ctx.message.text
  const ID = ctx.message.chat.id 
  const USER =ctx.message.from.username
  const  key1 = content.split(' ')[1];

  if (key1 == undefined){
    ctx.reply(` /regs id`);
    // ctx.reply(` ${key}\nnama= \nkelas= \njurusan= \njurusan= \nalamat= \nemail= \ngrup=A`);
    return false
}

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('data_smk');
    var myquery = { ids: Number(key1),setID : 0 };
    var newvalues = { $set: {ID: ID, setID : 1 } };
    dbo.collection('pegawai').updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log(res['modifiedCount'])
      console.log(res['modifiedCount']+" document updated");
      ctx.reply(res['modifiedCount']+" document updated");
      db.close();
    });
  });



})

//npm install --save qr-with-logo
bot.command(['qr1'], async (ctx) => {

  const QRLogo = require('qr-with-logo');

  const data = JSON.stringify({name: "Zacharie Happel",
                job:  "Student/Intern", 
                grade: "Senior"
  })
   
  await QRLogo.generateQRWithLogo(data, "logo.png", {}, "PNG", "qrlogo.png") 


})
bot.command(['qrs'], async (ctx) => {

  const QRLogo = require('qr-with-logo');

  const ID = ctx.message.chat.id
  const conten      = ctx.message.text
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];
  MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
    var db = client.db("data_smk");
    var query = { ID : ID };
    var selext = { _id: 1, ID: 1, NHP:1 ,nis:1, nisn:1, nama  : 1, kelas :1 , alamat :1}
    db.collection('siswa').find((query), { projection: (selext)  }).toArray(function(err, docs) {
    // db.collection("user").find({ID:ID}).toArray(function (err, docs) {
    // console.log(docs); 
      if (!docs.length >= 1){console.log("belum terdaftar");ctx.reply('anda belum terdaftar di siswa');}else{
        console.log(docs)
      const nama = docs['0']['nama']
      const kelas = docs['0']['kelas']
      const alamat = docs['0']['alamat']
      const ket = docs['0']['ket']


  const dataPath ='./qr/'+ID+'.png';

  let stringdata = JSON.stringify(docs['0'])
  const keywod ="data"
  const base64data = Buffer.from(stringdata).toString('base64')
  const base64dt = keywod+base64data
  
  console.log(base64data)


  if (key1 === 'set'){
  fs.unlink(dataPath, (err) => {
    if (err) {
      console.error(err)
    }
  }) //delete
  ctx.reply('qr has set')
  return false
  }
  
      if(!fs.existsSync(dataPath)){
        
        const data = JSON.stringify({name: "Zacharie Happel",
                job:  "Student/Intern", 
                grade: "Senior"
  })

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
  // const dataPath ='./qrcode1/'+ID+'.jpg';
  // await QRLogo.generateQRWithLogo(data, "logo.png", {}, "Base64", "qrlogo.png", async function(b64) {
  //               console.log("Base64: \n" + b64);
  // }); 
  QRLogo.generateQRWithLogo(base64data, "logo/node-js-logo.png", opts, "PNG", 'qr/'+ID+'.png', async function(b64) {
    console.log("Base64: \n" + b64);
    ctx.reply('created');
});


      }else{
    
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let yr = date_ob.getFullYear();
    
        // tbot.sendPhoto(ID,'./qr/'+ID+'.png')
        tbot.sendPhoto(ID,'./qr/'+ID+'.png',{caption: `${date}.${month}.${yr}@smkn2palopo`})


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
}) //end
/////////////////////////////////////////////////////////////////////////////

bot.command(['qrs1'], async (ctx) => {
  const ID = ctx.message.chat.id
  const conten      = ctx.message.text
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];
  MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
    var db = client.db("data_smk");
    var query = { ID : ID };
    var selext = { _id: 1, ID: 1, NHP:1 ,nis:1, nisn:1, nama  : 1, kelas :1 , alamat :1}
    db.collection('siswa').find((query), { projection: (selext)  }).toArray(function(err, docs) {
    // db.collection("user").find({ID:ID}).toArray(function (err, docs) {
    console.log(docs); 
      if (!docs.length >= 1){console.log("belum terdaftar");ctx.reply('anda belum terdaftar di siswa');}else{
        // console.log(docs)
      const nama = docs['0']['nama']
      const kelas = docs['0']['kelas']
      const alamat = docs['0']['alamat']
      const ket = docs['0']['ket']

//////////////////////////////////////////////////


const part1 ='C:\\Users\\1974a\\Desktop\\telegram_bot_js\\cryptobot\\qrcode\\'
const QRCode = require('qrcode')
const opts = {
errorCorrectionLevel: 'H',
type: 'terminal',
quality: 0.95,
margin: 1,
color: {
  dark: '#0c0d0d',
  light: '#FFF',
},
}

let stringdata = JSON.stringify(docs['0'])
const keywod ="data"
const base64data = Buffer.from(stringdata).toString('base64')
const base64dt = keywod+base64data

console.log(base64dt)


const dirpath ='./qrcode1/';
if (!fs.existsSync(dirpath)){
fs.mkdirSync(dirpath);
}




const dataPath ='./qrcode1/'+ID+'.jpg';

if (key1 === 'set'){
fs.unlink(dataPath, (err) => {
  if (err) {
    console.error(err)
  }
}) //delete
ctx.reply('qr has set')
return false
}

// current timestamp in milliseconds

// prints date & time in YYYY-MM-DD format
// console.log(year + "-" + month + "-" + date);
////////////////////////////////////////////////////
    if(!fs.existsSync(dataPath)){
      
      QRCode.toFile('./qrcode1/'+ID+'.jpg',base64data, opts)
      ctx.reply('created')
    }else{



let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let yr = date_ob.getFullYear();



      tbot.sendPhoto(ID,'./qrcode1/'+ID+'.jpg',{caption: `${date}.${month}.${yr}@smkn2palopo`})


      const path = require("path");
      const extensions = ['.png'];

      files.forEach((file) => {
        const fileDir = path.join("./", file);
            // Get the extension name of the file, lowercase it, then see if it is in the array of extensions
            // defined above. If so, remove it.
        if (extensions.includes(path.extname(file).toLowerCase())) {
          fs.unlinkSync(fileDir);
        }
      });





    }
// const file = ID+'.png'


// tbot.sendPhoto(ID,`./qrcode1/${ID}.jpg`)
// tbot.sendMessage(myid,qrImage)
// tbot.sendPhoto(ID,part1+ID+'.jpg',{caption: "judul"});
console.log(part1+ID+'.jpg')
console.log(`./qrcode1/${ID}.jpg`)



}})});  //user .find({ID:myid}) 
}) //end

bot.command(['qrg'], async (ctx) => {
const ID = ctx.message.chat.id
const conten      = ctx.message.text
const  key = conten.split(' ')[0];
const  key1 = conten.split(' ')[1];
MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
var db = client.db("data_smk");
var query = { ID : ID };
var selext = { _id: 1, ID: 1, NHP:1 , nama  : 1, nik :1 , alamat :1}
db.collection('guru').find((query), { projection: (selext)  }).toArray(function(err, docs) {
// db.collection("user").find({ID:ID}).toArray(function (err, docs) {
console.log(docs); 
if (!docs.length >= 1){console.log("belum terdaftar");ctx.reply('anda belum terdaftar di guru');}else{
  // console.log(docs)
const nama = docs['0']['nama']
const kelas = docs['0']['kelas']
const alamat = docs['0']['alamat']
const ket = docs['0']['ket']

//////////////////////////////////////////////////


const part1 ='C:\\Users\\1974a\\Desktop\\telegram_bot_js\\cryptobot\\qrcode\\'
const QRCode = require('qrcode')
const opts = {
errorCorrectionLevel: 'H',
type: 'terminal',
quality: 0.95,
margin: 1,
color: {
dark: '#208698',
light: '#FFF',
},
}

let stringdata = JSON.stringify(docs['0'])
const keywod ="data"
const base64data = Buffer.from(stringdata).toString('base64')
const base64dt = keywod+base64data

console.log(base64dt)


const dirpath ='./qrcode1/';
if (!fs.existsSync(dirpath)){
fs.mkdirSync(dirpath);
}




const dataPath ='./qrcode1/'+ID+'.jpg';

if (key1 === 'set'){
fs.unlink(dataPath, (err) => {
if (err) {
console.error(err)
}
}) //delete
ctx.reply('qr has set')
return false
}


if(!fs.existsSync(dataPath)){

QRCode.toFile('./qrcode1/'+ID+'.jpg',base64data, opts)
ctx.reply('created')
}else{
tbot.sendPhoto(ID,'./qrcode1/'+ID+'.jpg',{caption: "by @ SMK NEGERI 2 PALOPO"})
}
// const file = ID+'.png'


// tbot.sendPhoto(ID,`./qrcode1/${ID}.jpg`)
// tbot.sendMessage(myid,qrImage)
// tbot.sendPhoto(ID,part1+ID+'.jpg',{caption: "judul"});
console.log(part1+ID+'.jpg')
console.log(`./qrcode1/${ID}.jpg`)



}})});  //user .find({ID:myid}) 
}) //end

bot.command(['qrp'], async (ctx) => {
  const ID = ctx.message.chat.id
  const conten      = ctx.message.text
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];
  MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
  var db = client.db("data_smk");
  var query = { ID : ID };
  var selext = { _id: 1, ID: 1, NHP:1 , nama  : 1, nik : 1, alamat :1}
  db.collection('pegawai').find((query), { projection: (selext)  }).toArray(function(err, docs) {
  // db.collection("user").find({ID:ID}).toArray(function (err, docs) {
  console.log(docs); 
  if (!docs.length >= 1){console.log("belum terdaftar");ctx.reply('anda belum terdaftar di guru');}else{
    // console.log(docs)
  const nama = docs['0']['nama']
  const kelas = docs['0']['kelas']
  const alamat = docs['0']['alamat']
  const ket = docs['0']['ket']
  
  //////////////////////////////////////////////////
  
  
  const part1 ='C:\\Users\\1974a\\Desktop\\telegram_bot_js\\cryptobot\\qrcode\\'
  const QRCode = require('qrcode')
  const opts = {
  errorCorrectionLevel: 'H',
  type: 'terminal',
  quality: 0.95,
  margin: 1,
  color: {
  dark: '#208698',
  light: '#FFF',
  },
  }
  
  let stringdata = JSON.stringify(docs['0'])
  const keywod ="data"
  const base64data = Buffer.from(stringdata).toString('base64')
  const base64dt = keywod+base64data
  
  console.log(base64dt)
  
  
  const dirpath ='./qrcode1/';
  if (!fs.existsSync(dirpath)){
  fs.mkdirSync(dirpath);
  }
  
  
  
  
  const dataPath ='./qrcode1/'+ID+'.jpg';
  
  if (key1 === 'set'){
  fs.unlink(dataPath, (err) => {
  if (err) {
  console.error(err)
  }
  }) //delete
  ctx.reply('qr has set')
  return false
  }
  
  
  if(!fs.existsSync(dataPath)){
  
  QRCode.toFile('./qrcode1/'+ID+'.jpg',base64data, opts)
  ctx.reply('created')
  }else{
  tbot.sendPhoto(ID,'./qrcode1/'+ID+'.jpg',{caption: "by @ SMK NEGERI 2 PALOPO"})
  }
  // const file = ID+'.png'
  
  
  // tbot.sendPhoto(ID,`./qrcode1/${ID}.jpg`)
  // tbot.sendMessage(myid,qrImage)
  // tbot.sendPhoto(ID,part1+ID+'.jpg',{caption: "judul"});
  console.log(part1+ID+'.jpg')
  console.log(`./qrcode1/${ID}.jpg`)
  
  
  
  }})});  //user .find({ID:myid}) 
  }) //end
 
bot.command(['absen'], async (ctx) => {
  const content = ctx.message.text
  const ID = ctx.message.chat.id 
  const USER =ctx.message.from.username
  // console.log(content);
  const  key = content.split(' ')[0];
  const  key1 = content.split(' ')[1];

 if (key1){
        // const nama1=content.split('nama=')[1] && content.split('\n')[1] ;
        // const nama= nama1?.replace('nama=','').trim() ;
        // const kelas1=content.split('kelas=')[1]&& content.split('\n')[2];
        // const kelas= kelas1?.replace('kelas=','').trim();

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(mydb);
          dbo.collection(mycoll).find({}).toArray(function(err, msg) {

        // console.log(msg)


          contac3 = msg.filter(function(item){
              return item.grup == key1;         
          });

          const absen_judul = "silahkan absen hari ini"
          const absen_opsi = {
            reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: 
            [ [ '/hadir' ], [ '/izin' ], [ '/sakit' ] ]
            ,
        },
      };
              contac3.forEach(function (key) {

                tbot.sendMessage(key.ID, absen_judul, absen_opsi)
                // tbot.sendMessage(myid,`kirim ke : ${key.nama} -> ${opsi_pesan}`);
              console.log(key.ID)
              // tbot.sendMessage(key.ID, `${opsi_pesan}`)

            })            
          })
        }) 
  }




})

bot.command(['absen11'], async (ctx) => {

  const absen_judul = "silahkan absen hari ini"
  const absen_opsi = {
    reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: true,
        keyboard: 
        [ [ '/hadir' ], [ '/izin' ], [ '/sakit' ] ]
        ,
    },
  };
 

    MongoClient.connect(url, function(err, db) {
    // if (err) throw err;
    var dbo = db.db(mydb);
    var query = { grup : "k" };
    dbo.collection(mycoll).find((query), { projection: { _id: 0, ID: 1 } }).toArray(function(err, result) {
      // if (err) throw err;
    ////////////////////////////////////////////////////
      // console.log(result[0].ID);
      // console.log(result);

      // const contak = contac5[0].ID;
      // console.log(contak)

        result.forEach(function (key) {
        const id3 = key.ID
        // const id2 =Number(id3)

        console.log(id3)
        tbot.sendMessage(id3, absen_judul, absen_opsi)
     // tbot.sendMessage(304835260, "opsi_judul", replyOptions)

     ////////////////////////////////////////////////////////////////////
})
      db.close();
    });
  });
}) //end

bot.command(['set'], async (ctx) => {
  
  const content = ctx.message.text
  const ID = ctx.message.chat.id 
  const USER =ctx.message.from.username
  // console.log(content);
  const  key = content.split(' ')[0];
  var  setkey1 = Number(content.split(' ')[1]);
  var  setkey2 = Number(content.split(' ')[2]);

  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);

      // console.log(setkey1)

  if (isNaN(setkey1) || isNaN(setkey2) ){


    console.log("prosess find")
    
     
      dbo.collection(sett).find(({}), { projection: { _id : 0, Id: 1, modul: 1, aksi :1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
   
      result.forEach(function (key) {
        ctx.reply(`(${key.Id}).${key.modul} (${key.aksi})`)
        
   
    })      
      ctx.reply(`/set 1 1)`)
    });
      return false

  }else {
    console.log("prosess update")
// return false

    var dbo = db.db(mydb);
    // console.log(setkey1);
    // console.log(setkey2);
    // return false
    var myquery = { Id: setkey1 };
      var newvalues = { $set:{aksi: setkey2} };
      console.log(myquery);
      console.log(newvalues);
      // ctx.reply(myquery.Id);
      // ctx.reply(newvalues.$set.aksi);
      // return false
      dbo.collection(sett).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        ctx.reply("1 document updated");
        db.close();
      });
      
  }
  
});
  
 
})

bot.command(['pos'], async (ctx) => {
  const content = ctx.message.text
  const ID = ctx.message.chat.id 
  const USER =ctx.message.from.username
  // console.log(content);
  const  key = content.split('*')[0];
  var  setkey1 = Number(content.split('*')[1]);
  var  setkey2 = content.split('*')[2];
  var  setkey3 = Number(content.split('*')[3]);
  var  setkey4 = content.split('*')[4];
  // console.log(content)
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);

      // console.log(setkey1)

  if (isNaN(setkey1) ||  isNaN(setkey3) ){


    console.log("prosess find")
    
     
      dbo.collection(pos).find(({}), { projection: { _id : 0,Id: 1,grup: 1, status :1, ket :1, pesan :1} }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
   
      result.forEach(function (key) {
        
        ctx.reply(`(${key.Id}).${key.ket}->(${key.grup}) (${key.status}) (${key.pesan})`)
       
    })    
    ctx.reply(`/pos*1*k*0*assamu alaikum`)     
    });
    

  }else {
    console.log("prosess update")
// return false

    var dbo = db.db(mydb);
    // console.log(setkey1);
    // console.log(setkey2);
    // return false
    var myquery = { Id: setkey1 };
      var newvalues = { $set:{grup: setkey2, status: setkey3,pesan:setkey4} };
      console.log(myquery);
      console.log(newvalues);
      // return false
      dbo.collection(pos).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        ctx.reply("1 document updated");
        db.close();
      });
      
  }
  
});
})

bot.command(['pesan'], async (ctx) => {  

  const content = ctx.message.text  
  const ID = ctx.message.chat.id       
    const  psn1 = content.split('*')[1];
console.log(psn1)
    // return false
  if (psn1 === undefined){
    ctx.reply(` /pesan* isi pesan anda`);
    return false
  }else{

  tbot.sendMessage(myid,`pesan : ${psn1} \n /jawab*${ID}*`)
// ctx.telegram.sendMessage(ID, `jawaban gbr: ${psn}`); 
  }

})
 
bot.command(['jawab'], async (ctx) => {  

  const content = ctx.message.text           
  const  ID = content.split('*')[1];
  const  psn = content.split('*')[2];
  if (ID == undefined){
    ctx.reply(` ID belum di masukkan`);
    return false
  }
  if (psn == undefined){
    ctx.reply(` nama=pesan belum di masukkan`);
    return false
  }
  console.log(ID)
  tbot.sendMessage(`${ID}`, `Admin: ${psn}`)
// ctx.telegram.sendMessage(ID, `jawaban gbr: ${psn}`); 


})

bot.command(['pus'], async (ctx) => {
  let x = Math.random() * 100;
  const pesan_txt ={x};  
            
  fs.writeFileSync('general.json', JSON.stringify(pesan_txt));
  ctx.reply(`restart server`)
})

bot.command(['nis'], async (ctx) => {
  const ID = ctx.message.chat.id 
  const content = ctx.message.text           
  // const  ID = content.split('*')[1];
  const  nis1 = content.split(' ')[1];
  // console.log(nis1);
  // const  nis1= Number(content.split('*')[2]);
  MongoClient.connect(url, function(err, db) {
    // if (err) throw err;
    var dbo = db.db(mydb);
    var query = { "nis" : nis1 };
    dbo.collection(mycoll).find(query).toArray(function(err, result) {
      // if (err) throw err;
    ////////////////////////////////////////////////////
      // console.log(result[0].ids);
      // console.log(result.length);
      console.log(result);

      
if (result.length >= 1){
      const id =result[0].ids
      const nis =result[0].nis
      const nama =result[0].nama
      const kelas =result[0].kelas

      if(nis === null){
        ctx.reply("ketik /nis <no nis>")
      }else{
      ctx.reply(`data ditemukan \nnis : ${nis} \nNama : ${nama} \nKelas : ${kelas}`)
      ctx.reply(`jika benar , lanjut ketik  \n/regs ${id}`)
      }
} else{
  ctx.reply("Maaf ,nis tidak ditemukan")

}
     ////////////////////////////////////////////////////////////////////

      db.close();
    });


  });

}) //end


      
bot.command(['nowa'], async (ctx) => {

  const ID = ctx.message.chat.id
  const conten      = ctx.message.text
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];
//////////////////////////////////////////////////////
 
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db(mydb);
 var query = { ID : ID , setNHP: 0};
 dbo.collection(mycoll).find(query).toArray(function(err, result) {
 if (result.length >= 1){
    console.log(result)
   //  ctx.reply("ditemukan ");
   
 ////////////////////////////////////////////////////////
   
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var myquery = { ID: ID };
  var newvalues = { $set: {NHP: key1 ,setNHP : 1} };
  dbo.collection(mycoll).updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    ctx.reply("1 document updated");
    db.close();
  });
});
/////////////////////////////////////////////////////////////
  }else{

     ctx.reply("sudah apdate");



     }
  
 });  
    
  
});    
//////////////////////////////////////////////////////



});

bot.command(['ceks'], async (ctx) => {
  const ID = ctx.message.chat.id 
  MongoClient.connect(url, function(err, db) {
    // if (err) throw err;
    var dbo = db.db(mydb);
    var query = { ID : ID };
    dbo.collection(mycoll).find(query).toArray(function(err, result) {
      // if (err) throw err;
    ////////////////////////////////////////////////////
      // console.log(result[0].ID);
      // console.log(result.length);
      // console.log(result);

      
if (result.length >= 1){
      const id =result[0].ID
      const nama =result[0].nama
      const kelas =result[0].kelas
      const nohp =result[0].NHP
      ctx.reply(`anda sudah terdaftar \nID : ${id} \nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp} \n\nUbah nowa format ketik : \n/nowa 6285xxxxxxxxx`)     

} else{
  ctx.reply("Maaf ,anda belum terdaftar")

}
     ////////////////////////////////////////////////////////////////////

      db.close();
    });


  });

}) //end

// bot.on('document2', async (ctx) => {
//   const {file_id: fileId} = ctx.update.message.document;
//   const fileUrl = await ctx.telegram.getFileLink(fileId);
//   const response = await axios.get(fileUrl);
//   ctx.reply('I read the file for you! The contents were:\n\n' + response.data);
// });


// bot.on('document1', async (ctx) => {

//       const ID = ctx.message.chat.id 
//       const caption = ctx.message.caption
    
//       MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db(mydb);
//       var query = { ID : ID };
//       dbo.collection(mycoll).find(query).toArray(function(err, result) {

        
//           if (result.length >= 1){
//     //        ctx.reply("sudah terdaftar ");
//     //==================================================
//     MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db(mydb);
//       var query = { aksi : 1 ,Id : 3};
//       dbo.collection(sett).find(query).toArray(function(err, result1) {
//         console.log(result1) 
//         if (result1.length >= 1){
//                 ctx.reply("dokumen sudah aktif ");
//     console.log(ctx.update.message)
//     // const fileURL = tbot.getFileLink(ctx.update.message.document.file_id);
//     //   tbot.sendMessage(myid, fileURL)

//           // ctx.telegram.sendMessage(myid, `/pesan*${ID}*`); 
//           // tbot.sendPhoto(myid,ctx.message.photo[0].file_id , {caption: `ID:${ID}`})
//       //    ctx.reply(`${ctx.message.from.first_name} , berhasil mengirim pesan dokumen `);


//       const {file_id: fileId} = ctx.update.message.document;
//       const fileUrl =  ctx.telegram.getFileLink(fileId);
//       const response =  axios.get(fileUrl);
//       ctx.reply('I read the file for you! The contents were:\n\n' + response.data);











          
//           }else{
//           ctx.reply("Kirim dokumen tdk aktif");
//           return false
//           }
//         });
//       });    
//   //========================================================
      
//        }else{
//        ctx.reply("tdk terdaftar");
       
//         return false
//        }
//    });
//  });    

  
 
// }); //end



 bot.command(['2'], async (ctx) => {
  const ID = ctx.message.chat.id
  MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
    var db = client.db("bot_telegram");
    db.collection("user").find({ID:ID}).toArray(function (err, docs) {
    //  console.log(docs.length); 
      if (!docs.length >= 1){console.log("belum terdaftar");}else{
        // console.log(docs)
      const nama = docs['0']['nama']
      const kelas = docs['0']['kelas']
      const alamat = docs['0']['alamat']
      const ket = docs['0']['ket']
//////////////////////////////////////////////  
  // console.log("2.jika terdaftar")

/////////////////////////////////        

 const part1 ='C:\\Users\\1974a\\Desktop\\telegram_bot_js\\cryptobot\\qrcode\\'
 const QRCode = require('qrcode')
 const opts = {
  errorCorrectionLevel: 'H',
  type: 'terminal',
  quality: 0.95,
  margin: 1,
  color: {
   dark: '#208698',
   light: '#FFF',
  },
 }
 const data1 = [
  { data: 'shraddha.paghdar@gmail.com', mode: 'byte' },
  { data: '+78787878', mode: 'byte' }
]
 const data= `ID : *${ID}* \nnama:${nama} \nkelas:${kelas} \nalamat ${alamat} \nket ${ket}`


 const file = ID+'.png'
 const dataPath ='./qrcode/'+ID+'.jpg';
    if(!fs.existsSync(dataPath)){
      QRCode.toFile('./qrcode/'+ID+'.jpg',data.toString(), opts)
       
    }else{
      tbot.sendPhoto(ID,`./qrcode/${ID}.jpg`)
    }

 

// tbot.sendMessage(myid,qrImage)
// tbot.sendPhoto(ID,part1+ID+'.jpg',{caption: "judul"});
console.log(part1+ID+'.jpg')
console.log(`./qrcode/${ID}.jpg`)



}})});  //user .find({ID:myid}) 
 })

bot.command(['qr'], async (ctx) => {
  const ID = ctx.message.chat.id
  const conten      = ctx.message.text
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];
  MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
    var db = client.db("bot_telegram");
    db.collection("user").find({ID:ID}).toArray(function (err, docs) {
     console.log(docs); 
      if (!docs.length >= 1){console.log("belum terdaftar");}else{
        // console.log(docs)
      const nama = docs['0']['nama']
      const kelas = docs['0']['kelas']
      const alamat = docs['0']['alamat']
      const ket = docs['0']['ket']
//////////////////////////////////////////////////


const part1 ='C:\\Users\\1974a\\Desktop\\telegram_bot_js\\cryptobot\\qrcode\\'
const QRCode = require('qrcode')
const opts = {
 errorCorrectionLevel: 'H',
 type: 'terminal',
 quality: 0.95,
 margin: 1,
 color: {
  dark: '#208698',
  light: '#FFF',
 },
}
const data1 = [
 { data: 'shraddha.paghdar@gmail.com', mode: 'byte' },
 { data: '+78787878', mode: 'byte' }
]

let data2 = {
  ID:ID,
  nama: nama,
  kelas: kelas,
  alamat: alamat,
  ket : ket
}


let stringdata = JSON.stringify(docs['0'])

const dirpath ='./qrcode/';
if (!fs.existsSync(dirpath)){
 fs.mkdirSync(dirpath);
}




const dataPath ='./qrcode/'+ID+'.jpg';

if (key1 === 'set'){
fs.unlink(dataPath, (err) => {
  if (err) {
    console.error(err)
  }
}) //delete
ctx.reply('qr has set')
return false
}


    if(!fs.existsSync(dataPath)){
      
       QRCode.toFile('./qrcode/'+ID+'.jpg',stringdata, opts)
       ctx.reply('created')
    }else{
      tbot.sendPhoto(ID,'./qrcode/'+ID+'.jpg',{caption: "by @ SMK NEGERI 2 PALOPO"})
    }
// const file = ID+'.png'


// tbot.sendPhoto(ID,`./qrcode/${ID}.jpg`)
// tbot.sendMessage(myid,qrImage)
// tbot.sendPhoto(ID,part1+ID+'.jpg',{caption: "judul"});
// console.log(part1+ID+'.jpg')
console.log(`./qrcode/${ID}.jpg`)



}})});  //user .find({ID:myid}) 
}) //end

bot.command(['qr2'], async (ctx) => {
  const ID = ctx.message.chat.id
  const conten      = ctx.message.text
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];
  MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
    var db = client.db("bot_telegram");
    db.collection("user").find({ID:ID}).toArray(function (err, docs) {
     console.log(docs); 
      if (!docs.length >= 1){console.log("belum terdaftar");}else{
        // console.log(docs)
      const nama = docs['0']['nama']
      const result =docs['0']
     /// ubah menjadi sting
      
      // console.log(myJSON)    /// 
//////////////////////////////////////////////////
const QRCode = require('qrcode')
const opts = {
  errorCorrectionLevel: 'H',
  type: 'terminal',
  quality: 0.95,
  margin: 1,
  color: {
   dark: '#208698',
   light: '#FFF',
  },
 }

 const myJSON = JSON.stringify(docs['0']);
 var crypto = require('crypto');

var encrypt = function (plain_text, encryptionMethod, secret, iv) {
    var encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
    return encryptor.update(plain_text, 'utf8', 'base64') + encryptor.final('base64');
};

var decrypt = function (encryptedMessage, encryptionMethod, secret, iv) {
    var decryptor = crypto.createDecipheriv(encryptionMethod, secret, iv);
    return decryptor.update(encryptedMessage, 'base64', 'utf8') + decryptor.final('utf8');
};

var textToEncrypt = myJSON;
// var encryptionMethod = 'AES-256-CBC';
var encryptionMethod = 'AES-256-CBC';
var secret = "My32charPasswordAndInitVectorStr"; //must be 32 char length
var iv = secret.substr(0,16);

var encryptedMessage = encrypt(textToEncrypt, encryptionMethod, secret, iv);
var decryptedMessage = decrypt(encryptedMessage, encryptionMethod, secret, iv);

console.log(encryptedMessage);
console.log(decryptedMessage);

// Text send to encrypt function
console.log(iv)

const myJSON2 = JSON.stringify(encryptedMessage);
let stringdata = myJSON2

const dirpath ='./qrcode2/';
if (!fs.existsSync(dirpath)){
 fs.mkdirSync(dirpath);
}




const dataPath ='./qrcode2/'+ID+'.jpg';

if (key1 === 'set'){
fs.unlink(dataPath, (err) => {
  if (err) {
    console.error(err)
  }
}) //delete
ctx.reply('qr has set')
return false
}


    if(!fs.existsSync(dataPath)){
      
       QRCode.toFile('./qrcode2/'+ID+'.jpg',stringdata, opts)
       ctx.reply('created')
    }else{
      tbot.sendPhoto(ID,'./qrcode2/'+ID+'.jpg',{caption: "by @ SMK NEGERI 2 PALOPO"})
    }
// const file = ID+'.jpg'


// tbot.sendPhoto(ID,`./qrcode2/${ID}.jpg`)
// tbot.sendMessage(myid,qrImage)
// tbot.sendPhoto(ID,part1+ID+'.jpg',{caption: "judul"});
// console.log(part1+ID+'.jpg')
console.log(`./qrcode2/${ID}.jpg`)



}})});  //user .find({ID:myid}) 
}) //end


 bot.command(['ad'], async (ctx) => {
 
  //////////////////////////////////////////////////////
   const ID = ctx.message.chat.id 
    MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     var dbo = db.db(mydb);
     var query = { ID : 304835260 };
     dbo.collection(mycoll).find(query).toArray(function(err, result) {
     if (result.length >= 1){
        console.log(result)
         ctx.reply("ditemukan ");
         }else{
         ctx.reply("tdk ada".result.length);
         }
      
     });  
        
      
   });    
 ///////////////////////////////////////////////////////     
});
            
bot.command(['nowa'], async (ctx) => {

  const ID = ctx.message.chat.id
  const conten      = ctx.message.text
  const  key = conten.split(' ')[0];
  const  key1 = conten.split(' ')[1];
//////////////////////////////////////////////////////
 
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db(mydb);
 var query = { ID : ID , setNHP: 0};
 dbo.collection(mycoll).find(query).toArray(function(err, result) {
 if (result.length >= 1){
    console.log(result)
   //  ctx.reply("ditemukan ");
   
 ////////////////////////////////////////////////////////
   
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var myquery = { ID: ID };
  var newvalues = { $set: {NHP: key1 } };
  dbo.collection(mycoll).updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
/////////////////////////////////////////////////////////////
  }else{

     ctx.reply("sudah apdate".result.length);



     }
  
 });  
    
  
});    
//////////////////////////////////////////////////////

 
  })        
*/
///////////////////////////////////////////////////////////////////////////////////////////

bot.on("photo",ctx=>{
  const ID = ctx.message.chat.id 
  const caption = ctx.message.caption

   MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var query = { ID : ID };
  dbo.collection("siswa").find(query).toArray(function(err, result1) {
    console.log(result1)
     if (result1.length >= 1){
    //  ctx.reply("sudah aktif ");
    const nama = result1['0']['nama']
    const kelas = result1['0']['kelas']
    // const grup = result['0']['grup']


    console.log(result1)

      // ctx.telegram.sendMessage(myid, `/pesan*${ID}*`); 
      tbot.sendPhoto(myid,ctx.message.photo[0].file_id , {caption: `Pesan/grup ${caption} \nNama : ${nama} \nkelas : ${kelas} \n`})
      ctx.reply(`${ctx.message.from.first_name} , berhasil mengirim pesan gambar `);


      
       }else{
       ctx.reply("nomor tdk terdaftar");
       
        return false
       }
   });
 });    
       

/////////////////////////////////        
// }})

});  //user .find({ID:myid})  
// }
// })
// });  //setting .find(photo)
////////////////////////////////
 
// }) //end
// bot.sendAudio(chatId, audio);
  // break;



bot.on('video', async (data) => {
 console.log(data.update.message)
})


bot.on('audio', async (data) => {
  console.log(data)
 })

bot.on('document', async (data) => {

 
    const fileURL = await tbot.getFileLink(data.update.message.document.file_id);
    tbot.sendMessage(myid, fileURL)
   
  });
bot.on('text', async (ctx) => {
    const ID = ctx.message.chat.id 
    const content = ctx.message.text 
    const content1 = ctx.message.text.toLowerCase()    
    const pesann = ctx.message.text 
    const  key = content1.split(' ')[0];
    const  key1 = content1.split(' ')[1];
    const  key2 = content1.split(' ')[2];
    const  key3 = content1.split(' ')[3];
    const  Key1 = content.split(' ')[1];
    const  Key2 = content.split(' ')[2];
    const  Key3 = content.split(' ')[3];
    const  key0 = content1.split('*')[0];


          console.log(`ID : ${ID} --> ${pesann}`)
  
  
  if (content === "pesan"){
  
   
  
     console.log(psn)
     if (psn === undefined)
        {
          ctx.reply('pesan <spasi> isi pesan anda ')
          return false
        }else{
  
    
  
          MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
            var db = client.db("bot_telegram");
            db.collection("user").find({ID:myid}).toArray(function (err, docs) {
            //  console.log(docs.length); 
              if (!docs.length >= 1){console.log("belum terdaftar");}else{
        //////////////////////////////////////////////  
        const nama = docs['0']['nama']
        const kelas = docs['0']['kelas']
        const grup = docs['0']['grup']
  
  
        console.log(docs['0']['nama'])
  
          // ctx.telegram.sendMessage(myid, `/pesan*${ID}*`); 
          ctx.telegram.sendMessage(myid, `Pesan: ${psn} \nNama : ${nama} \nkelas : ${kelas}/${grup} \n /pesan1*${ID}*`)
          ctx.reply(`${ctx.message.from.first_name} , berhasil mengirim pesan gambar `);
  
          // console.log("2.jika terdaftar")
  
       /////////////////////////////////        
        }})});  //user .find({ID:myid})  
        // }})});  //setting .find(photo)
      ////////////////////////////////
      }
  


  }else if (key === "ceks"){
            MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db(mydb);
        var query = { ID : ID };
        dbo.collection(mycoll).find(query).toArray(function(err, result) {
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
          ctx.reply(`anda sudah terdaftar \nIds: ${ids} \nID : ${id} \nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp} `)     
    
    } else{
      ctx.reply("Maaf ,anda belum terdaftar")
    
    }
         ////////////////////////////////////////////////////////////////////
    
          db.close();
        });
    
    
      });
    
  
  
  }else if (key === "regs"){
    if (key1 == undefined){
      ctx.reply(`regs id`);
      // ctx.reply(` ${key}\nnama= \nkelas= \njurusan= \njurusan= \nalamat= \nemail= \ngrup=A`);
      return false
   }
  
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db('data_smk');
      var myquery = { ids: Number(key1),setID : 0 };
      var newvalues = { $set: {ID: ID, setID : 1 } };
      dbo.collection('siswa').updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res['modifiedCount'])
        console.log(res['modifiedCount']+" document updated");
        ctx.reply(res['modifiedCount']+" document updated");
        db.close();
      });
    });

  }else if (key === "qrss"){
    
              const QRLogo = require('qr-with-logo');

              const ID = ctx.message.chat.id
              const conten      = ctx.message.text
              const  key = conten.split(' ')[0];
              const  key1 = conten.split(' ')[1];
              MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
                var db = client.db("data_smk");
                var query = { ID : ID };
                var selext = { _id: 1, ID: 1, NHP:1 ,nis:1, nisn:1, nama  : 1, kelas :1 , alamat :1}
                db.collection('siswa').find((query), { projection: (selext)  }).toArray(function(err, docs) {
                // db.collection("user").find({ID:ID}).toArray(function (err, docs) {
                // console.log(docs); 
                  if (!docs.length >= 1){console.log("belum terdaftar");ctx.reply('anda belum terdaftar di siswa');}else{
                    console.log(docs)
                  const nama = docs['0']['nama']
                  const kelas = docs['0']['kelas']
                  const alamat = docs['0']['alamat']
                  const ket = docs['0']['ket']


              const dataPath ='./qr/'+ID+'.png';

              let stringdata = JSON.stringify(docs['0'])
              const keywod ="data"
              const base64data = Buffer.from(stringdata).toString('base64')
              const base64dt = keywod+base64data
              
              console.log(base64data)


              if (key1 === 'update'){
              fs.unlink(dataPath, (err) => {
                if (err) {
                  console.error(err)
                }
              }) //delete
              ctx.reply('qr has set')
              return false
              }
              
                  if(!fs.existsSync(dataPath)){
                    
                    const data = JSON.stringify({name: "Zacharie Happel",
                            job:  "Student/Intern", 
                            grade: "Senior"
              })

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
              // const dataPath ='./qrcode1/'+ID+'.jpg';
              // await QRLogo.generateQRWithLogo(data, "logo.png", {}, "Base64", "qrlogo.png", async function(b64) {
              //               console.log("Base64: \n" + b64);
              // }); 
              QRLogo.generateQRWithLogo(base64data, "logo/node-js-logo.png", opts, "PNG", 'qr/'+ID+'.png', async function(b64) {
                console.log("Base64: \n" + b64);
                ctx.reply('created');
            });


                  }else{
                
              let ts = Date.now();
              let date_ob = new Date(ts);
              let date = date_ob.getDate();
              let month = date_ob.getMonth() + 1;
              let yr = date_ob.getFullYear();
                
                    // tbot.sendPhoto(ID,'./qr/'+ID+'.png')
                    tbot.sendPhoto(ID,'./qr/'+ID+'.png',{caption: `${date}.${month}.${yr}@smkn2palopo`})


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
             //end
/////////////////////////////////////////////////////////////////////////////


        

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
                  ctx.reply('created');
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
  }else if (key == '1reset') {  //setNHP = 0


      //  client.sendMessage(msg.from, 'proses reg');
     
            
              if (key1 == undefined || key2 == undefined){
                ctx.reply(` reset wa <ids>\nreset telg <ids>`);
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
                ctx.reply(res['modifiedCount']+" document updated");
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
                ctx.reply(res['modifiedCount']+" document updated");
                client.sendMessage(msg.from,res['modifiedCount']+" document updated");
              });
            });



          }




          
  }else if (content == '1tugas') {
            
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
  }else if (key == '1soal') {
            
    if (key1 == undefined){
      ctx.reply(`soal <nomot>`);
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
 
 
  }else if (key == '1jawab') {

    if (key1 == undefined){
      ctx.reply(`jawab <nomot>`);
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

  }else if (content == '1hasil') {

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

  }else if (key == '1media') {

  if (key1 == undefined){
    ctx.reply(`media <token>`);
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
            ctx.reply(`token anda masukkan salah`);}else{
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
        ctx.reply(`token show|img|reset|reg <nilai>`);
        return false
      }

      MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db(mydb);
        var query = { ID : ID };
        dbo.collection("admin").find(query).toArray(function(err, result) {
          // if (err) throw err;
        ////////////////////////////////////////////////////
          // console.log(result[0].ID);
          // console.log(result.length);
          // console.log(result);

          
    if (result.length >= 1){
      // const ids =result[0].ids
      //     const id =result[0].ID
      //     const nama =result[0].nama


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
              // client.sendMessage(msg.from,`${res1} : ${res2}`)
              ctx.reply(`${res1} : ${res2}`)
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
                  //  client.sendMessage(msg.from,res)
                   ctx.reply(res)
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
                  //  client.sendMessage(msg.from,res)
                   ctx.reply(res)
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
                  //  client.sendMessage(msg.from,res)
                  ctx.reply(res)
                    db.close();
                  });
                });
    }


      /////////////////////////////////////////////////////////////
      // console.log('anda sudah terdaftar');
          } else{
      // client.sendMessage(msg.from,'Maaf ,anda belum terdaftar')
      ctx.reply('Maaf ,anda belum terdaftar')
      console.log('anda belum terdaftar');
      
        }
            ////////////////////////////////////////////////////////////////////
        
              db.close();
            });
          
          });
  

 }else if (key == '1send') {

        if (key1 == undefined){
          ctx.reply(`send <kelas> <namakelas> <idmedia>`);
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
                  ctx.reply(`adan tidak ada akses`);}else{
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
         ctx.reply(`link media ${key3}  tidak ada`)           
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
             ctx.reply(`terkirim`)
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
      ctx.reply(`cari <kelas|nama|upload> <kewod> `);
      return false
    }

    if ( key1 == "kelas"){

          // var key2 = 'tkr'
          // var key01= key21.toUpperCase()
          var keyRG = RegExp(key2,"i")
          
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
                      // client.sendMessage(msg.from,'TIDAK DI TEMUKAN')
                      ctx.reply('TIDAK DI TEMUKAN')
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
              ctx.reply(data)
              // client.sendMessage(msg.from,data)
              })
          
          // console.log(uniqueChars);
              
              }
          })})





        }else if(key1 == "nama"){
          // var key21 = 'Suci'
          // var key01= key2.toUpperCase()
          var keyRG = RegExp(key2,"i")
          
          // var keyRG = RegExp("^"+key2+"$","g")
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
              ctx.reply(data)
              // client.sendMessage(msg.from,data)
              })
          
          
              
              }
          })})


        }else if (key1 == "upload"){

    // var key21 = 'Suci'
          // var key01= key2.toUpperCase()
          var keyRG = RegExp(key21,"i")
          
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
        
          } else if (key1 =="?"){
        ctx.reply(
          
`
[] -> dal[ae]m, --> dalem dan dalam.\n
(),->  ^(www.)?domain$ --> www.domain dan domain saja.\n
| , ATAU -> ayam|anjing|kucing  ayam,anjing,kucing saja\n
^ -> awal kalimat\n
$ -> akhir kalimat\n
======================\n
fungsi kebalikan (negate)\n
\D : match non digit character [^\d]\n
\W : match non word character [^\w\n
\S : match non whitepsace character [^\s\n
=========================
* : ulangi item sebelumnya 0 kali atau beberapa kali\n
+ : ulangi item sebelumnya minimal 1 kali atau lebih\n
? : Membuat item sebelumnya menjadi Optional\n
{n} : ulangi item sebelumnya sebanyak n kali\n
{n,} : ulangi item sebelumnya minimal sebanyak n kali atau lebih\n
{n,m} : ulangi item minimal n kali, maksimal m kali\
=================================\n
\d : digits only atau [0-9]\n
\w : words only / alphanumeric dan underscore [A-Za-z0-9_]\n`+
"\s : whitespace / spasi, tab, line break, atau form feed [ \t\r\n\f]"

        )


          }
  

  }else if (key0 == 'tugas') {
    const  tgs = content.split('*')[0];
    const  tgs1 = content.split('*')[1];
    const  tgs2 = content.split('*')[2];
    const  tgs3 = content.split('*')[3];
    const  tgs4 = content.split('*')[4];
    const  tgs5 = content.split('*')[5];
    
    console.log(tgs1)
    console.log(tgs2)
    console.log(tgs3)
    console.log(tgs4)
    console.log(tgs5)

          if (tgs1 == undefined){
            ctx.reply(`tugas*<kelas>*<pelajaran>*<nmtugas>*<nmguru>`);
            return false
          }
        
          // var tgs1 = 'Suci'
          // var key01= key2.toUpperCase()
          var keyRG = RegExp(tgs1,"i")
          
          // var keyRG = RegExp("^"+key2+"$","g")
          console.log(keyRG)
          // var key1 = 133
          MongoClient.connect(url, function (err, clie) {
            
          var db = clie.db("data_smk");
          var query = {ID : ID};
              db.collection("guru").find(query).toArray(function (err, docs) {
                    //  console.log(docs); 
                      if (!docs.length >= 1){console.log('belum terdaftar');}else{

             var idg =docs['0']["ids"]
             console.log(idg)
              MongoClient.connect(url, function(err, cdb) {    
              var db = cdb.db("data_smk");
              var collection = db.collection("siswa");
              
              var query = {kelas : tgs1};
              // var query = { nama :  {$regex: keyRG }};
              var projection = {};   
              // var projection = {};   
              var cursor = collection.find(query).project(projection);

            



              db.collection("siswa").find(query).toArray(function(err, result) {
                // if (err) throw err;
              ////////////////////////////////////////////////////
                // console.log(result[0].ID);
                // console.log(result.length);
                // console.log(result);
          
                
          if (!result.length >= 1){ console.log("kelas belum terdaftar")
          ctx.reply(`kelas tidak terdaftar `)
        }else{
              //  console.log(result)

              //  return false
               
                console.log('kelas terdaftar')

              

              cursor.forEach(
                  function(doc) {
                     console.log(doc['ids']);
                    //  console.log(doc['nama']);
                     var ids = doc['ids']
                     var nama = doc['nama']
                    //  var kelas = doc['ids']
                  ///////////////////////////////////////////////////////
                 

                    MongoClient.connect(url, function(err, db) {
                      if (err) throw err;
                      var dbo = db.db("data_smk");
                      var myobj =  {
                        ids: ids,
                        idg: idg,
                        nama: nama,
                        kelas: tgs1,
                        namaTugas: tgs3,
                        pelajaran: tgs2,
                        NamaGuru: tgs4,
                        date: date1,
                        selesai: 0
                      };
                      dbo.collection("tugas").insertOne(myobj, function(err, res) {
                        if (err) throw err;
                        // console.log("1 document inserted");
                        db.close();
                      });
                    });
              
                  /////////////////////////////////////////////////////////
    
                  }, 
                  function(err) {
                      cdb.close();
                  }
              );

                // })



              ctx.reply(`kelas ${tgs1},sudah " ${result.length}" dibuat tugas `)
                
                }
                   });
      })}

    })
  })
}else if (key == 'tugasku') {

  
  // const media1 = MessageMedia.fromFilePath('./qrcode1/'+ids+'.jpg');
  // console.log(media1);
  // client.sendMessage(msg.from, media1,{caption: 'image' });
  // chat.sendMessage(media1, {caption: 'this is my caption'}
  MongoClient.connect(url, function (err, client2) {   //user .find({ID:myid})
      var db = client2.db('data_smk');
      var query = { ID : ID };
      var selext = {};
      db.collection('siswa').find((query), { projection: (selext)  }).toArray(function(err, docs) {
        // var cursor = collection('siswa').find((query), { projection: (selext)  })
        // db.collection("user").find({ID:ID}).toArray(function (err, docs) {
          // console.log(docs); 
          if (!docs.length >= 1){console.log('belum terdaftar');}else{
              // console.log(docs)
              const nama = docs['0']['nama'];
              const kelas = docs['0']['kelas'];
              const alamat = docs['0']['alamat'];
              const ket = docs['0']['ket'];
              const ID = docs['0']['ID'];
              const ids = docs['0']['ids'];
              console.log('terdaftar')
              //////////////////////////////////////////////////
              console.log('kelas terdaftar')



              var mongodb = require("mongodb");

              var client = mongodb.MongoClient;
              
              
              client.connect(url, function (err, client) {
                  
                  var db = client.db("data_smk");
                  var collection = db.collection("tugas");
                  
                  var query = {
                      "ids": ids , "selesai": 0
                  };
                  
                  var cursor = collection.find(query);
                  
                  cursor.forEach(
                      function(doc) {
                          console.log(`pel:${doc["pelajaran"]}, Tugas:${doc["namaTugas"]}, Guru:${doc["NamaGuru"]}, tanggal:${doc["date"]}`);
                          ctx.reply (`pel:${doc["pelajaran"]}, Tugas:${doc["namaTugas"]}, Guru:${doc["NamaGuru"]}, tanggal:${doc["date"]}`);


                      }, 
                      function(err) {
                          client.close();
                      }
                  );
                  
                  // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
                  
              });




          }});});  //user .find({ID:myid}) 

}else if (key == 'daftar') {

  if (key1 == undefined){
    ctx.reply(`daftar <nama> <sekolah>`);
    return false
  }                                                                                                                                                                                            


  MongoClient.connect(url, function(err, db) {
    // if (err) throw err;
    var dbo = db.db(mydb);
    var query = {NO_Hp:ID  };
    var sort = {};
    dbo.collection("daftar").find(query).sort(sort).toArray(function(err, result) {
            // console.log(result[0].ID);
      console.log(result.length);
      // console.log(result);
  
  ////////////////terdaftar ////////////////////////////    
  // if (result.length >= 1){
  //   console.log("sudh terdftr");
  //   ctx.reply("ANDA SIDAH TERDAFTAR")
  // }else{
  /////////////////////////////////////////

  MongoClient.connect(url, function(err, db) {
    // if (err) throw err;
    var dbo = db.db(mydb);
    var query = {  };
    var sort = { "no": -1 };
    dbo.collection("daftar").find(query).sort(sort).toArray(function(err, result) {
            // console.log(result[0].ID);
      console.log(result.length);
      // console.log(result);
  
      
  if (!result.length >= 1){
    console.log(result.length);

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);
      var myobj =  {
        no: 1,
        NO_Hp: ID,
        nama: key1,
        kelas: key2,
       
      };
      dbo.collection("daftar").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        ctx.reply("terim kasih sudah terdaftar")
        db.close();
      });
    });




  }else{
  // const ids =result[0].ids
      var no =result[0].no
     

  const nomor =  no+1  
     
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);
      var myobj =  {
        no: nomor,
       
        NO_Hp: ID,
        nama: key1,
        kelas: key2,
       
      };
      dbo.collection("daftar").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        ctx.reply("terim kasih sudah terdaftar")
        db.close();
      });
    });
  
  }
     ////////////////////////////////////////////////////////////////////
  
      db.close();
    });
  
  
  });
  
// }////TERDAFTAR
}
////////////////////////////////////////////////////////////
)})}
})
  



























































 bot.command(['find'], async (ctx) => {
 
 //////////////////////////////////////////////////////
  const ID = ctx.message.chat.id 
   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var query = { ID : 1212 };
    dbo.collection(mycoll).find(query).toArray(function(err, result) {
       if (result.length >= 1){
        ctx.reply("sudah terdaftar ");
        }else{
        ctx.reply("tdk terdaftar");
        }
    });
  });    
///////////////////////////////////////////////////////
            
 


});
  
bot.command(['showall'], async (ctx) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(mycoll).find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });


})


bot.command(['grup_id'], async (ctx) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var query = { grup : "A" };
    dbo.collection(mycoll).find((query), { projection: { _id: 0, ID: 1 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
})

bot.command(['showa_files'], async (ctx) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(mycoll).find({}, { projection: { _id: 0, nama: 1, kelas: 1 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
})

bot.command(['show1_grup'], async (ctx) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    /*Return only the documents with the address "Park Lane 38":*/
    var query = { grup : "A" };
    dbo.collection(mycoll).find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });          
            });
//Find documents where the nama starts with the letter "S":
bot.command(['show1_s'], async (ctx) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var query = { USER: /^v/ };
    dbo.collection(mycoll).find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

            })
bot.command(['insert'], async (ctx) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myobj =  {
      ID: 3048352601,
      USER: 'virgoid1',
      nama: 'dffg1',
      kelas: 'cgvv',
      alamat: 'cff',
      email: 'ccxvg',
      grup: 'A'
    };
    dbo.collection(mycoll).insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
 

})
bot.command(['in_all'], async (ctx) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myobj =[  {
      ID: 3048352603,
      USER: 'virgoid1',
      nama: 'dffg1',
      kelas: 'cgvv',
      alamat: 'cff',
      email: 'ccxvg',
      grup: 'A'
    },
    {
      ID: 3048352604,
      USER: 'virgoid1',
      nama: 'dffg1',
      kelas: 'cgvv',
      alamat: 'cff',
      email: 'ccxvg',
      grup: 'A'
    }
  ];

  [{0:"5654459484",1:"5293131897"}]




    dbo.collection(mycoll).insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log(res);
      // console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });
 

})
bot.command(['del1'], async (ctx) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var myquery = { USER : 'virgoid1' };
  dbo.collection(mycoll).deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

})
//Delete all documents were the address starts with the letter "O":
bot.command(['del'], async (ctx) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myquery = { address: /^O/ };
    dbo.collection(mycoll).deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
      db.close();
    });
  });
  
  })
  bot.command(['update1'], async (ctx) => {
   
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);
      var myquery = { address: "Valley 345" };
      var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
      dbo.collection(mycoll).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
   
    })
   // Update all documents where the name starts with the letter "S":
   bot.command(['update'], async (ctx) => {
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(mydb);
          var myquery = { address: /^S/ };
          var newvalues = {$set: {name: "Minnie"} };
          dbo.collection(mycoll).updateMany(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log(res.result.nModified + " document(s) updated");
            db.close();
          });
        });

   })
   bot.command(['limit'], async (ctx) => {
   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(mycoll).find().limit(5).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });


   })
    

   bot.command(['join'], async (ctx) => {

   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection('orders').aggregate([
      { $lookup:
         {
           from: 'products',
           localField: 'product_id',
           foreignField: '_id',
           as: 'orderdetails'
         }
       }
      ]).toArray(function(err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res));
      db.close();
    });
  });
   })

  //  "PAB": 0,
  //  "PPKN": 0,
  //  "BhsIndonesia": 0,
  //  "Matematika": 0,
  //  "SejarahIndonesia": 0,
  //  "BhsInggris": 0,
  //  "SeniBudaya": 0,
  //  "PJOK" : 0,
  //  "FISIKA" : 0,
  //  "KIMIA" : 0
  

   bot.launch();