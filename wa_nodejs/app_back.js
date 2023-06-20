const token = '5912662958:AAGACDWCFl6-PKGrW33D_qEQHkQEA8p55F0'  //coba
// var token = '5764992393:AAEVCMXm0wC0hiL6Xk9LuogL2i0Sz21Ulrk'; // smkn2plp
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
const mydb="bot_telegram"
const mycoll = "user"
const myabsen = "absen"
const quiz = "quiz"
const pos = "posts"
const select= "select"
const pilih= "pilih"
const sett = "settings"

var partfile = __dirname+'\\qrcode1\\.jpg';
console.log(partfile)

// function hash (password) {
//   return hash = crypto.createHmac('sha256', 's37x')
//        .update(password)
//        .digest('hex')
//  }

////////////////

const { encrypt, decrypt } = require('./crpyto')

const hash = encrypt('irsukal')
// console.log(hash)
// {
//     iv: '237f306841bd23a418878792252ff6c8',
//     content: 'e2da5c6073dd978991d8c7cd'
// }
const text = decrypt(hash)
// console.log(text) // Hello World!
 //////////////


 var aes256 = require('aes256');

var key = '123456';
var plaintext = 'my plaintext message';
var buffer = Buffer.from(plaintext);

var cipher = aes256.createCipher(key);

var encryptedPlainText = cipher.encrypt(plaintext);
var decryptedPlainText = cipher.decrypt(encryptedPlainText);



function encrypt3(plainText, key2, outputEncoding = "base64") {
    const cipher = crypto.createCipheriv("aes-192-ecb", key2, null);
    return Buffer.concat([cipher.update(plainText), cipher.final()]).toString(outputEncoding);
}

function decrypt3(cipherText, key2, outputEncoding = "utf8") {
    const cipher = crypto.createDecipheriv("aes-192-ecb", key2, null);
    return Buffer.concat([cipher.update(cipherText), cipher.final()]).toString(outputEncoding);
}

const key2 = "pytQ8L7Qxi8S9kt4KISaew==";
const plainText = "irsukal";
const encrypted3 = encrypt3(plainText, key2, "base64");
// console.log("Encrypted string (base64):", encrypted3);
const decrypted3 = decrypt3(Buffer.from(encrypted3, "base64"), key2, "utf8")
// console.log("Decrypted string:", decrypted3);


const base64data = Buffer.from('someText').toString('base64')
// console.log(base64data)

// console.log(hash('bisminllah'))
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var path;
  var cursor =  dbo.collection(pilih).find(({}), { projection: { _id: 0, text: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    // console.log(result['0']['text']);
 
   
  });
  
});



     //////////////////////////////////////
    MongoClient.connect(url, function (err, client) {   //setting .find(photo)
      var photo = { Id : 1, aksi : 1};
      var dokumen = { Id : 3, aksi : 1 };
      var audio_vid = { Id : 4, aksi : 1};
      var daftar = { Id : 2 , aksi :1};
      var pesan = { Id : 5, aksi : 1};
      var absen = { Id : 6, aksi : 1};
      var db = client.db("bot_telegram");
      db.collection("sett").find(photo).toArray(function (err, docs) {
      //  console.log(docs.length); 
        if (!docs.length >= 1){console.log("belum aktif");}else{
   
          // console.log("1.jika sudah akstif")

          MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
            var db = client.db("bot_telegram");
            db.collection("user").find({ID:myid}).toArray(function (err, docs) {
            //  console.log(docs.length); 
              if (!docs.length >= 1){console.log("belum terdaftar");}else{
        //////////////////////////////////////////////  
          // console.log("2.jika terdaftar")

       /////////////////////////////////        
        }})});  //user .find({ID:myid})  
        }})});  //setting .find(photo)
      ////////////////////////////////
    


bot.start((ctx) => ctx.reply('selamat datang di smkn2 palopo \n cek server ketik /cek '));


const web_link = "https://datawa.smkn2-palopo.sch.id/";
const set = "https://datawa.smkn2-palopo.sch.id/telebot/crud_setting/";
const post1 = "https://datawa.smkn2-palopo.sch.id/telebot/crud_post/index.php";


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

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var photo = { Id : 1, aksi : 1};
  var dokumen = { Id : 3, aksi : 1 };
  var audio_vid = { Id : 4, aksi : 1};
  var daftar = { Id : 2 , aksi :1};
  var pesan = { Id : 5, aksi : 1};
  var absen = { Id : 6, aksi : 1};

  dbo.collection(sett).find(photo).toArray(function(err, set_photo) {
  
    if (set_photo.length >= 1){
      console.log(`photo: buka`)
      } else { console.log(`photo: tutup`) 
    }
// console.log(set_photo)
  })

  dbo.collection(sett).find(dokumen).toArray(function(err, set_dokumen) {
   
      if (set_dokumen.length >= 1){
        console.log(`dokumen: buka`)
        } else { console.log(`dokumen: tutup`) 
      }
  //  console.log(set_dokumen)
    })

    dbo.collection(sett).find(audio_vid).toArray(function(err, set_audio_vid) {
      
        if (set_audio_vid.length >= 1){
          console.log(`audio_vid: buka`)
          } else { console.log(`audio_vid: tutup`) 
        }
    // console.log(set_audio_vid)
      })

      dbo.collection(sett).find(daftar).toArray(function(err, set_daftar) {
        
          if (set_daftar.length >= 1){
            console.log(`daftar: buka`)
            } else { console.log(`daftar: tutup`) 
          }
      // console.log(set_daftar)
        })


        dbo.collection(sett).find(pesan).toArray(function(err, set_pesan) {
         
            if (set_pesan.length >= 1){
              console.log(`pesan: buka`)
              } else { console.log(`pesan: tutup`) 
            }
        //  console.log(set_pesan)
          })

          dbo.collection(sett).find(absen).toArray(function(err, set_absen) {
         
            if (set_absen.length >= 1){
              console.log(`absen: buka`)
              } else { console.log(`absen: tutup`) 
            }
        //  console.log(set_absen)
          })
});   

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var sendpesan = { Id : 1 ,status : 1};
  var sendfile = { Id : 2 ,status : 1};
  var selecpesan = { Id : 3 ,status : 1 };
  var selecfile = { Id : 4 ,status : 1 };
  var opsi = { Id : 5,status : 1};
  
  dbo.collection(pos).find(sendpesan).toArray(function(err, set_sendpesan) {
   
    // console.log(set_sendpesan)
// console.log(`sendpsn:${sendmsg}`)
// 
  if (set_sendpesan.length >= 1 ){
            console.log('aktif : send pesan ->grup')
            const sendmsg = set_sendpesan['0'].status
            const sendmsg_grup =set_sendpesan['0'].grup
            const sendmsg_pesan =set_sendpesan['0'].pesan


              MongoClient.connect(url, function(err, db) {

              // const ID = ctx.message.chat.id 
              dbo.collection(mycoll).find({}).toArray(function(err, msg) {
  
            // console.log(msg)


              contac3 = msg.filter(function(item){
                  return item.grup == sendmsg_grup;         
              });

              // console.log(contac3)
              // return false  
              contac3.forEach(function (key) {
                tbot.sendMessage(myid,`kirim ke : ${key.nama} -> ${sendmsg_pesan}`);
              console.log(key.ID)
              tbot.sendMessage(key.ID, `${sendmsg_pesan}`)

            })


            })
            })     
            }else{
              return false
            }

  })

  dbo.collection(pos).find(sendfile).toArray(function(err, set_sendfile) {

   if (set_sendfile.length >= 1 ){

          console.log('aktif : send file ->grup ')
          const part =process.env.PART_FILE_WIN;
          const sendfile = set_sendfile['0'].status
          const sendfile_grup =set_sendfile['0'].grup
          const sendfile_pesan =set_sendfile['0'].pesan
          const sendfile_judul =set_sendfile['0'].judul

           MongoClient.connect(url, function(err, db) {

           // const ID = ctx.message.chat.id 
           dbo.collection(mycoll).find({}).toArray(function(err, msg) {

        //  console.log(msg)


           contac3 = msg.filter(function(item){
               return item.grup == sendfile_grup;         
           });

          //  console.log(contac3)
        // return false  
        const ext =  sendfile_pesan.split('.')[1];
        console.log(ext)


        const count1 =contac3.length
        console.log(`jum: ${count1}`)
        // const contak = contac3[0].ID;

        contac3.forEach(function (key) {

        const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
        sleep(10000); 
        const id3 = (key.ID)
        const id2 =Number(id3)
        // console.log(id2)

        if (ext === "pdf" || ext === "txt" || ext === "docx" || ext === "doc" || ext === "apk"){
        tbot.sendDocument(id2,part+sendfile_pesan,{caption: sendfile_judul}); 


        } else if( ext === "jpg") {
        tbot.sendPhoto(id2,part+sendfile_pesan,{caption: sendfile_judul}); 

        }

        else if( ext === "mp3") {
        tbot.sendAudio(id2,part+sendfile_pesan, {title: sendfile_judul});
        } else if( ext === "mp4") {
        tbot.sendVideo(id2,part+sendfile_pesan, {caption: sendfile_judul});
        }

        tbot.sendMessage(myid,`kirim ke :  ${sendfile_pesan}`);
        console.log(`kirim ke :  ${sendfile_pesan}`)
         }) })
         })     
         }else{
           return false
         }
  
         //  console.log(sendfile)
  })

dbo.collection(pos).find(selecpesan).toArray(function(err, set_selecpesan) {
  
    // console.log(set_selecpesan)
    if (set_selecpesan.length >= 1 ){
            console.log('aktif : send pesan ->selec')
            const selectmsg = set_selecpesan['0'].status
            const selectmsg_grup =set_selecpesan['0'].grup
            const selectmsg_pesan =set_selecpesan['0'].pesan
 
 
               MongoClient.connect(url, function(err, db) {
 
               // const ID = ctx.message.chat.id 
               dbo.collection(select).find({}).toArray(function(err, msg) {
   
            //  console.log(msg)
 
 
              //  contac3 = msg.filter(function(item){
              //      return item.grup == '0';         
              //  });
 
              //  console.log(contac3)
             //  return false  
              msg.forEach(function (key) {
                //  tbot.sendMessage(myid,`kirim ke : ${key.nama} -> ${sendmsg_pesan}`);
               console.log(key['0'])
               tbot.sendMessage(key['0'], `${selectmsg_pesan}`)
 
             })
 
 
             })
             })     
             }else{
               return false
             }





   })

dbo.collection(pos).find(selecfile).toArray(function(err, set_selecfile) {
  
  // console.log(set_selecfile)
      if (set_selecfile.length >= 1 ){
        console.log('aktif : send file ->select')
        const part =process.env.PART_FILE_WIN;
    
        const selectfile = set_selecfile['0'].status
        const selectfile_grup =set_selecfile['0'].grup
        const selectfile_pesan =set_selecfile['0'].pesan
        const selectfile_judul =set_selecfile['0'].judul



             MongoClient.connect(url, function(err, db) {

             // const ID = ctx.message.chat.id 
             dbo.collection(select).find({}).toArray(function(err, msg) {
 
           console.log(msg)


            //  contac3 = msg.filter(function(item){
            //      return item.grup == '0';         
            //  });

            //  console.log(contac3)
  

        const ext =  selectfile_pesan.split('.')[1];
        console.log(ext)
        
        
        //  const count1 =msg.length
        //  console.log(`jum: ${count1}`)
        // const contak = contac3[0].ID;
        //  return false 
        msg.forEach(function (key) {
        
        //   const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
        //   sleep(10000); 
          const id3 = (key['0'])
          // const id2 =Number(id3)
        console.log(id3)
        
        if (ext === "pdf" || ext === "txt" || ext === "docx" || ext === "doc" || ext === "apk"){
        tbot.sendDocument(id3,part+selectfile_pesan,{caption: selectfile_judul}); 
        
        
        } else if( ext === "jpg") {
        tbot.sendPhoto(id3,part+selectfile_pesan,{caption: selectfile_judul}); 
        
        }
        
        else if( ext === "mp3") {
        tbot.sendAudio(id3,part+selectfile_pesan, {title: selectfile_judul});
        } else if( ext === "mp4") {
        tbot.sendVideo(id3,part+selectfile_pesan, {caption: selectfile_judul});
        }
        
        tbot.sendMessage(myid,`kirim ke :  ${selectfile_pesan}`);
        console.log(`kirim ke :  ${selectfile_pesan}`)
 
 
 
 
 
          })
 
 
          })
          })     
          }else{
            return false
          }
 
 
 
 




         
      // console.log(selectfile)
   })

dbo.collection(pos).find(opsi).toArray(function(err, set_opsi) {
  
            
      //  console.log(opsi)
      if (set_opsi.length >= 1 ){
        console.log('aktif : send pesan ->grup')
        const opsi = set_opsi['0'].status
        const opsi_grup =set_opsi['0'].grup
        const opsi_pesan =set_opsi['0'].pesan
        const opsi_judul =set_opsi['0'].judul
    
    
                  MongoClient.connect(url, function(err, db) {
    
                  // const ID = ctx.message.chat.id 
                  dbo.collection(mycoll).find({}).toArray(function(err, msg) {
      
                // console.log(msg)
    
    
                  contac3 = msg.filter(function(item){
                      return item.grup == opsi_grup;         
                  });




                  MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db(mydb);
                    dbo.collection(pilih).find(({}), { projection: { _id: 0, text: 1 } }).toArray(function(err, result) {
                      if (err) throw err;
                      console.log(result);
                      
                    const pilih = [result]
                  
                     const opsi_judul =opsi_pesan
                     const replyOptions1 = {
                          reply_markup: {
                              resize_keyboard: true,
                              one_time_keyboard: true,
                              keyboard: 
                              pilih
                              ,
                          },
                      };
                      
                  
                      contac3.forEach(function (key) {

                        tbot.sendMessage(key.ID, opsi_judul, replyOptions1)
                        // tbot.sendMessage(myid,`kirim ke : ${key.nama} -> ${opsi_pesan}`);
                      console.log(key.ID)
                      // tbot.sendMessage(key.ID, `${opsi_pesan}`)
        
                    } )   

                    });
                  });
                  })
                })     
                }else{
                  return false
                }
          })
});  


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
bot.command(['cek'], async (ctx) => {
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
      ctx.reply(`anda sudah terdaftar \nID : ${id} \nNama : ${nama} \nKelas : ${kelas}`)

} else{
  ctx.reply("Maaf ,anda belum terdaftar")

}
     ////////////////////////////////////////////////////////////////////

      db.close();
    });
  });

}) //end

bot.command(['cls'], async (ctx) => {

  // ctx.reply("Silahkan Copy , isi dan kirim format ini !", { reply_markup:  { remove_keyboard: true }  })
  // return false
  tbot.sendMessage(304835260, "!", { reply_markup:  { remove_keyboard: true }  })
  return false

})  //end


bot.on('document', async (data) => {

 
  const fileURL = await tbot.getFileLink(data.update.message.document.file_id);
  tbot.sendMessage(myid, fileURL)
 
});



bot.on('document2', async (ctx) => {
  const {file_id: fileId} = ctx.update.message.document;
  const fileUrl = await ctx.telegram.getFileLink(fileId);
  const response = await axios.get(fileUrl);
  ctx.reply('I read the file for you! The contents were:\n\n' + response.data);
});


bot.on('document1', async (ctx) => {

      const ID = ctx.message.chat.id 
      const caption = ctx.message.caption
    
      MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);
      var query = { ID : ID };
      dbo.collection(mycoll).find(query).toArray(function(err, result) {

        
          if (result.length >= 1){
    //        ctx.reply("sudah terdaftar ");
    //==================================================
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);
      var query = { aksi : 1 ,Id : 3};
      dbo.collection(sett).find(query).toArray(function(err, result1) {
        console.log(result1) 
        if (result1.length >= 1){
                ctx.reply("dokumen sudah aktif ");
    console.log(ctx.update.message)
    // const fileURL = tbot.getFileLink(ctx.update.message.document.file_id);
    //   tbot.sendMessage(myid, fileURL)

          // ctx.telegram.sendMessage(myid, `/pesan*${ID}*`); 
          // tbot.sendPhoto(myid,ctx.message.photo[0].file_id , {caption: `ID:${ID}`})
      //    ctx.reply(`${ctx.message.from.first_name} , berhasil mengirim pesan dokumen `);


      const {file_id: fileId} = ctx.update.message.document;
      const fileUrl =  ctx.telegram.getFileLink(fileId);
      const response =  axios.get(fileUrl);
      ctx.reply('I read the file for you! The contents were:\n\n' + response.data);











          
          }else{
          ctx.reply("Kirim dokumen tdk aktif");
          return false
          }
        });
      });    
  //========================================================
      
       }else{
       ctx.reply("tdk terdaftar");
       
        return false
       }
   });
 });    

  
 
}); //end


bot.on("photo",ctx=>{
          const ID = ctx.message.chat.id 
          const caption = ctx.message.caption

          MongoClient.connect(url, function (err, client) {   //setting .find(photo)
            var photo = { Id : 1, aksi : 1};
            var dokumen = { Id : 3, aksi : 1 };
            var audio_vid = { Id : 4, aksi : 1};
            var daftar = { Id : 2 , aksi :1};
            var pesan = { Id : 5, aksi : 1};
            var absen = { Id : 6, aksi : 1};
            var db = client.db("bot_telegram");
            db.collection("sett").find(photo).toArray(function (err, docs) {
            //  console.log(docs.length); 
              if (!docs.length >= 1){console.log("kirim poto  belum aktif");;ctx.reply("kirim poto  belum aktif")}else{
         
                console.log("1.jika sudah akstif")
      
                MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
                  var db = client.db("bot_telegram");
                  db.collection("user").find({ID:ID}).toArray(function (err, docs) {
                  //  console.log(docs.length); 
                    if (!docs.length >= 1){console.log(" belum terdaftar");ctx.reply("kirim poto belum terdaftar ");}else{
              //////////////////////////////////////////////  
         
          MongoClient.connect(url, function(err, db) {
           if (err) throw err;
           var dbo = db.db(mydb);
           var query = { ID : ID };
           dbo.collection(mycoll).find(query).toArray(function(err, result) {
              if (result.length >= 1){
 //         ctx.reply("sudah terdaftar ");
         //==================================================
         MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(mydb);
          var query = { aksi : 1 ,Id : 1 };
          dbo.collection(sett).find(query).toArray(function(err, result1) {
            console.log(result1)
             if (result1.length >= 1){
            //  ctx.reply("sudah aktif ");
            const nama = result['0']['nama']
            const kelas = result['0']['kelas']
            const grup = result['0']['grup']


            console.log(result['0']['nama'])

              // ctx.telegram.sendMessage(myid, `/pesan*${ID}*`); 
              tbot.sendPhoto(myid,ctx.message.photo[0].file_id , {caption: `Pesan/grup ${caption} \nNama : ${nama} \nkelas : ${kelas}/${grup} \n /jawab*${ID}*`})
              ctx.reply(`${ctx.message.from.first_name} , berhasil mengirim pesan gambar `);


              
              }else{
              ctx.reply("Kirim photo tdk aktif");
               return false
              }
            });
          });    
          //========================================================
              
               }else{
               ctx.reply("nomor tdk terdaftar");
               
                return false
               }
           });
         });    
               
       
       /////////////////////////////////        
      }})});  //user .find({ID:myid})  
    }})});  //setting .find(photo)
  ////////////////////////////////
         
 }) //end






 
















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



// json -> sting
//qr
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

// sting  ->base64bit
//qr1
bot.command(['qr1'], async (ctx) => {
        const ID = ctx.message.chat.id
        const conten      = ctx.message.text
        const  key = conten.split(' ')[0];
        const  key1 = conten.split(' ')[1];
        MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
          var db = client.db("bot_telegram");
          var query = { ID : ID };
          var selext = { _id: 1, ID: 1 , nama  : 1, kelas :1 , alamat :1}
          db.collection('user').find((query), { projection: (selext)  }).toArray(function(err, docs) {
          // db.collection("user").find({ID:ID}).toArray(function (err, docs) {
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

//engresi ebc  to php
//qr2
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
////////////////////////////////////////////////////////////////

///////////////////////











bot.command(['hadir' || 'izin' || 'sakit'], async (ctx) => {

  // // console.log(ctx.message)
  //           //  siap kirim pesan            
  //           if(absen1  == 0 ){       
  //             ctx.reply(`absen sudah di tutup`);
  //           return false
  //           }else if (absen1  == 1 ) {
  //           }                         
            
    // load contac    

// membuat file pesan json 

const ID = ctx.message.chat.id 

arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
      arrhari = ["Minggu","Senin","Selasa","Rabu","Kamis","jumat","Sabtu"];
      ndate = new Date();
      millisecond = ndate.getMilliseconds();
      detik = ndate.getSeconds();
      menit = ndate.getMinutes();
      jam = ndate.getHours();
      hari = ndate.getDay();
      tanggal = ndate.getDate();
      bulan2 = ndate.getMonth();
      tahun = ndate.getFullYear();
      // console.log(tanggal+"-"+arrbulan[bulan]+"-"+tahun+"<br/>"+jam+" : "+menit+" : "+detik+"."+millisecond);
      // const  waktu =jam+":"+menit+":"+detik;
      const  tgl =tanggal+"-"+bulan2+"-"+tahun;
      const day = arrhari[hari]

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = { ID : ID };
        dbo.collection(mycoll).find(query).toArray(function(err, result) {
           if (!result.length >= 1){
 ctx.reply("Anda Belum trdaftar ");
            return false
            }else{   ///////////////////////>>>>>>>>>>>>>>>
      //       ctx.reply("tdk terdaftar");
      //                /////////////////////////>>>>>>>>>>>>>>>
            
      //       }
      //   });
      // })






MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db(mydb);
var query = { ID : ID };
dbo.collection(myabsen).find(query).toArray(function(err, result) {
// console.log(result)
// console.log(result.length)
// return false
if( !result.length >= 1 ){
ctx.reply("data 0");
///////////////////////////
        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = { ID : ID };
        dbo.collection(mycoll).find(query).toArray(function(err, result) {
         const  tbt =tanggal+"-"+bulan1+"-"+tahun;
        const day = arrhari[hari];

        const ket = ctx.message.text
        const ID =result[0].ID
        const nm =result[0].nama
        const kls =result[0].kelas
        const group =result[0].grup
        // const tgl1 =result[0].absensi[0].tgl
        // console.log(tgl1)
        ///////////////////////////////////////////_id: ObjectId(),
        //  return false  

        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
                     
        var myobj ={
        "ID": ID,
        "nama": nm,
        "kelas" : kls,
        "grup" :group,
        "absensi": {
        ket :ket,
        tgl : tanggal,
        tbt : tbt,
        hari :hari,
        day : day,
        bulan :bulan1
        }         

        }
        dbo.collection(myabsen).insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted(1)");
        ctx.reply("absensi sudah di simpan ");
        db.close();
        });
        });
///////////////////////////////////////////////////////////////

         


        } 
        ) 
        })





        }else{
// ctx.reply("data 1 tatau lebih(1)");
          const duplikatid = result.find((contact) => contact.absensi.tbt === tgl);
          console.log(duplikatid)
          // console.log(duplikatid.length)
          if(duplikatid){
ctx.reply(`sudah absen`);
          return false
          }else{

// ctx.reply(`tdk ada`);
//           // }

//     return false      


      

      const tgl1 =result[0].absensi.tbt
            console.log(tgl1)
      const ket = ctx.message.text

      const  tbt =tanggal+"-"+bulan2+"-"+tahun;
      // const day = arrhari[hari];
      // const ket = ctx.message.text
      const ID =result[0].ID
      const nm =result[0].nama
      const kls =result[0].kelas
      const group =result[0].grup
            // return false  
            
            
      // if (tgl0 !== tgl1){

// ctx.reply("tdk sama");

        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        
        var myobj ={
          "ID": ID,
          "nama": nm,
          "kelas" : kls,
          "grup" :group,
          "absensi": {
          ket :ket,
          tgl : tanggal,
          tbt : tbt,
          hari :hari,
          day : day,
          bulan :bulan2
          }         
  
          }
          dbo.collection(myabsen).insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted(1)");
          ctx.reply("absensi sudah di simpan ");
        db.close();
        });
        });




        }}








//////////////////////////////////////


})})

ctx.reply("tdk terdaftar");
                     /////////////////////////>>>>>>>>>>>>>>>
            
            }
        });
      })


})  // end



///////////////////////////////////////////////////
bot.command(['reg'], async (ctx) => { 
  const content = ctx.message.text
  const ID = ctx.message.chat.id 
  const USER =ctx.message.from.username
  const  key1 = content.split(' ')[1];

  if (key1 == undefined){
    ctx.reply(` /reg id`);
    // ctx.reply(` ${key}\nnama= \nkelas= \njurusan= \njurusan= \nalamat= \nemail= \ngrup=A`);
    return false
}

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('data_smk');
    var myquery = { id: Number(key1),setID : 0 };
    var newvalues = { $set: {ID: ID, setID : 1 } };
    dbo.collection('guru').updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log(res)
      console.log("1 document updated");
      ctx.reply(` 1 document updated`);
      db.close();
    });
  });



})

bot.command(['daftar'], async (ctx) => {   

        
  // if(daftar  == 0 ){
  //   ctx.reply(`belum terbuka pendaftaran`);
  //  return false
  //  }else if (daftar  == 1 ) {
   
  //  }   
  //           // ctx.reply(`MESSAGE :${ctx.message.text}`)
            const content = ctx.message.text
            const ID = ctx.message.chat.id 
            const USER =ctx.message.from.username
            // console.log(content);
            const  key = content.split(' ')[0];
            const  key1 = content.split(' ')[1];
          

            const nama1=content.split('nama=')[1] && content.split('\n')[1] ;
            const nama= nama1?.replace('nama=','').trim() ;
            const kelas1=content.split('kelas=')[1]&& content.split('\n')[2];
            const kelas= kelas1?.replace('kelas=','').trim();
            const jurusan1=content.split('jurusan=')[1] && content.split('\n')[3];
            const jurusan= jurusan1?.replace('jurusan=','').trim();
            const alamat1=content.split('alamat=')[1] && content.split('\n')[4];
            const alamat= alamat1?.replace('alamat=','').trim();
            const email1=content.split('email=')[1]&& content.split('\n')[5];
            const email= email1?.replace('email=','').trim();
            const grup1=content.split('grup=')[1]&& content.split('\n')[6];
            const grup= grup1?.replace('grup=','').trim();
            
          if (key1 == undefined){
                ctx.reply(` pilih kelas :  /form`);
                // ctx.reply(` ${key}\nnama= \nkelas= \njurusan= \njurusan= \nalamat= \nemail= \ngrup=A`);
                return false
          }else if  (nama == undefined){
                    ctx.reply(` nama= belum di masukkan`);
                    return false
                  }
          else  if (kelas == undefined){
                    ctx.reply(` kelas= belum di masukkan`);
                    return false
                  } 
          else  if (jurusan == undefined){
                    ctx.reply(` jurusan= belum di masukkan`);
                    return false
                  }                  
          else  if (alamat == undefined){
                    ctx.reply(` alamat= belum di masukkan`);
                    return false
                  }
          else if (email == undefined){
                    ctx.reply(` email= belum di masukkan`);
                    return false
                  }

                  if (jurusan == "tkj"){
                    const data =
                  {
                      "ID" :ID,
                      "nama" : nama, 
                      "kelas" : kelas, 
                      "jurusan" : jurusan, 
                      "email" : email, 
                      "alamat" : alamat, 
                      "grup" : grup, 
                      "set1" : 0,
                      "set2": 0,  
                      "nilai_x1": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_x2": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_xi1": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_xi2": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_xii1": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_xi12": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                       "nilai_produktif": {
                          "prod1": 0,
                          "prod2": 0,
                          "prod3": 0,
                          "prod4": 0,
                          "prod5": 0,
                          "prod6": 0,
                          "prod7": 0,
                          "prod8": 0,
                          "prod9": 0,
                          "prod110": 0,
                          "ket": `
                          prod1 = ProgramDasar: X ,
                          prod2 = DasarDesainGrafis: X,
                          prod3 = DesainMediaInteraktif: XI
                          prod4 = Animasi2DDan3D: XI,
                          prod5 =TeknikPengelolaanAudioDanVideo: XII,
                          prod6 = ProduktifKreatifdanKewiraushaan : XII,
                          `
                      }
                      
                  
                    }
                    
                    return data
                  }   
                
                const contact ={ID,USER,nama,kelas,alamat,email,grup};

                // const modul = require('./dataJSON/nilai.js')
               var data1 = {
                  "_id" : ID,
                   "ID" : ID,
                  "nama" : nama, 
                  "kelas" : kelas, 
                  "jurusan" : jurusan, 
                  "email" : email, 
                  "alamat" : alamat, 
                  "grup" : grup, 
                  "set1" : 0,
                  "set2": 0  
                    
                   
                  }; 

                  const tkj = {
                      "ID" :ID,
                      "nama" : nama, 
                      "kelas" : kelas, 
                      "jurusan" : jurusan, 
                      "email" : email, 
                      "alamat" : alamat, 
                      "grup" : grup, 
                      "set1" : 0,
                      "set2": 0,  
                      "nilai_x1": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_x2": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_xi1": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_xi2": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_xii1": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      },
                      "nilai_xi12": {
                          "PAB": 0,
                          "PPKN": 0,
                          "BhsIndonesia": 0,
                          "Matematika": 0,
                          "SejarahIndonesia": 0,
                          "BhsInggris": 0,
                          "SeniBudaya": 0,
                          "PJOK" : 0,
                          "FISIKA" : 0,
                          "KIMIA" : 0
                      }
                      ,
                      "nilai_produktif": {
                        "prod1": 0,
                        "prod2": 0,
                        "prod3": 0,
                        "prod4": 0,
                        "prod5": 0,
                        "prod6": 0,
                        "prod7": 0,
                        "prod8": 0,
                        "prod9": 0,
                        "prod110": 0,
                        "ket": `
                        prod1 = ProgramDasar: X ,
                        prod2 = DasarDesainGrafis: X,
                        prod3 = DesainMediaInteraktif: XI
                        prod4 = Animasi2DDan3D: XI,
                        prod5 =TeknikPengelolaanAudioDanVideo: XII,
                        prod6 = ProduktifKreatifdanKewiraushaan : XII,
                        `
                    }
                      }
                  
            




/////////////////////////////////////////////////////////////////////////////
        // const ID = ctx.message.chat.id 
        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        /*Return only the documents with the address "Park Lane 38":*/
        var query = { ID : ID };
        dbo.collection(mycoll).find(query).toArray(function(err, result) {
          if (err) throw err;
          //  console.log(result);
          //  console.log(result.length);
          
          const  hasil = result
          
          if (hasil.length >= 1){
            ctx.reply("sudah terdaftar ");
            db.close();
            return false;
          }else{
                   
            

                    /////////////simpan////////////////////////////
                    MongoClient.connect(url, function(err, db) {
                      if (err) throw err;
                      var dbo = db.db(mydb);
                      var myobj =  data1
                      dbo.collection(mycoll).insertOne(myobj, function(err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        ctx.reply("sudah tersimpan ");
                        db.close();
                      });
                    });
                    /////////////////////simpan/////////////////////
         }});
         });    
////////////////////////////////////////////////////////////////////
                                  
 } );
               

 bot.on('text', async (ctx) => {
  const ID = ctx.message.chat.id 
  const content = ctx.message.text 
  const content1 = ctx.message.text.toLowerCase()    
  const pesann = ctx.message.text 
 
        console.log(`ID : ${ID} --> ${pesann}`)


if (content === "pesan"){

  const content = ctx.message.text.toLowerCase()           
   const  psn = content.split('*')[1];

   console.log(psn)
   if (psn === undefined)
      {
        ctx.reply('pesan <spasi> isi pesan anda ')
        return false
      }else{

  //  MongoClient.connect(url, function (err, client) {   //setting .find(photo)
  //   var photo = { Id : 1, aksi : 1};
  //   var dokumen = { Id : 3, aksi : 1 };
  //   var audio_vid = { Id : 4, aksi : 1};
  //   var daftar = { Id : 2 , aksi :1};
  //   var pesan = { Id : 5, aksi : 1};
  //   var absen = { Id : 6, aksi : 1};
  //   var db = client.db("bot_telegram");
  //   db.collection("sett").find(pesan).toArray(function (err, docs) {
  //   //  console.log(docs.length); 
  //     if (!docs.length >= 1){console.log("belum aktif");}else{
 
  //       // console.log("1.jika sudah akstif")

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

}


if ((content === 'hadir' || content === 'izin' || content === 'sakit')) {

// var ID = ctx.message.chat.id 
MongoClient.connect(url, function (err, client) {   //setting .find(photo)
  var photo = { Id : 1, aksi : 1};
  var dokumen = { Id : 3, aksi : 1 };
  var audio_vid = { Id : 4, aksi : 1};
  var daftar = { Id : 2 , aksi :1};
  var pesan = { Id : 5, aksi : 1};
  var absen = { Id : 6, aksi : 1};
  var db = client.db("bot_telegram");
  db.collection("sett").find(absen).toArray(function (err, docs) {
  //  console.log(docs.length); 
    if (!docs.length >= 1){console.log("belum aktif");ctx.reply("absen belum aktif ");}else{


MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db(mydb);
var query = { id_user : ID };
dbo.collection(myabsen).find(query).toArray(function(err, result) {
console.log(result)
console.log(result.length)


// return false
        arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        const     arrhari = ["Minggu","Senin","Selasa","Rabu","Kamis","jumat","Sabtu"];
        ndate = new Date();
        millisecond = ndate.getMilliseconds();
        detik = ndate.getSeconds();
        menit = ndate.getMinutes();
        jam = ndate.getHours();
        const     hari = ndate.getDay();
        const       tanggal = ndate.getDate();
        const     bulan = ndate.getMonth();
        const tahun = ndate.getFullYear();
        const  tbt =tanggal+"-"+bulan+"-"+tahun;
        const day = arrhari[hari];

if( !result.length >= 1 ){  //// jika data 0  insert              
// ctx.reply("data 0");
///////////////////////////
        // var ID2 = ctx.message.chat.id 
        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = { ID : ID };
        dbo.collection(mycoll).find(query).toArray(function(err, result) {
      console.log(result)

        const ket = ctx.message.text
        const ID =result[0].ID
        const nm =result[0].nama
        const group =result[0].grup
    

                MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db(mydb);
                          
              var myobj ={
                id_user: ID,
                nama: nm,
                grup: group,    
                ket :ket,
                tgl : tanggal,
                tbt : tbt,
                hari :hari,
                day : day,
                bulan :bulan                  
              }


                dbo.collection(myabsen).insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted(1)");
                ctx.reply("data absen sudah tersimpan ");
                db.close();
                });
                });
///////////////////////////////////////////////////////////////
        })
        })

    }else{           //// jika  data ada 
    // ctx.reply("data 1 au lebih(1)");

      const  tglnow =tanggal+"-"+bulan+"-"+tahun;
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);
      var query = { id_user : ID , tbt : tglnow};
      console.log(tglnow)
      
      dbo.collection(myabsen).find(query).toArray(function(err, absen) {
      console.log(absen.length)    
      if (absen.length >= 1){
        ctx.reply("anda sudah absen hari ini ");

        
      }else{
        // ctx.reply("belum absen hari ini ");

      ///////////////////////////////////
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = { ID : ID };
        dbo.collection(mycoll).find(query).toArray(function(err, result) {
      

        const ket = ctx.message.text
        const ID =result[0].ID
        const nm =result[0].nama
        const group =result[0].grup
    
              ////////////////////////
                MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db(mydb);
                          
              var myobj ={
                id_user: ID,
                nama: nm,
                grup: group,    
                ket :ket,
                tgl : tanggal,
                tbt : tbt,
                hari :hari,
                day : day,
                bulan :bulan                 
              }


                dbo.collection(myabsen).insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted(1)");
                ctx.reply("data absen sudah tersimpan ");
                db.close();
                });
                });
                ///////////////////

        })
    })

    //////////////////////////////////////



      }





      })
    })
          
      // return false



    }            

    })
    })
  }})});  //setting .find(absen)
    }

    else if((content === 'a' || content === 'b' || content === 'c'|| content === 'd'|| content === 'e'|| content === 'cls')) {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
      

    if (content === "cls"){
        var dbo = db.db(mydb);
        var delquery = { };
        dbo.collection(quiz).deleteMany(delquery, function(err, obj) {
          if (err) throw err;
          console.log(obj.result + " document(s) deleted");
          db.close();
        });

    }else{

        var dbo = db.db(mydb);

        var myobj =  {
          ID: ID,
          jawab_quiz: content
        };
        var query = { ID : ID };


        dbo.collection(quiz).find(query).toArray(function(err, result) {
          if (result.length >= 1){
          ctx.reply("Anda sudah Menjawab ");
          }else{
            var dbo = db.db(mydb);
                dbo.collection(quiz).insertOne(myobj, function(err, res) {
                      if (err) throw err;
                      console.log("1 document inserted");
                      db.close();
                    });

        //  ctx.reply("tdk terdaftar");
          }
      });

        

      }




      });
    }else{
//////////////////////////////////////
MongoClient.connect(url, function (err, client) {   //setting .find(photo)
  var photo = { Id : 1, aksi : 1};
  var dokumen = { Id : 3, aksi : 1 };
  var audio_vid = { Id : 4, aksi : 1};
  var daftar = { Id : 2 , aksi :1};
  var pesan = { Id : 5, aksi : 1};
  var absen = { Id : 6, aksi : 1};
  var db = client.db("bot_telegram");
  db.collection("sett").find(pesan).toArray(function (err, docs) {
  //  console.log(docs.length); 
    if (!docs.length >= 1){console.log("belum aktif");}else{

      console.log("1.jika sudah aktif")

      MongoClient.connect(url, function (err, client) {   //user .find({ID:myid})
        var db = client.db("bot_telegram");
        db.collection("user").find({ID:myid}).toArray(function (err, docs) {
        //  console.log(docs.length); 
          if (!docs.length >= 1){console.log("belum terdaftar");}else{
 ////////////////////////////////////////////// 

//////////////////////////////////////////////  
const nama = docs['0']['nama']
const kelas = docs['0']['kelas']
const grup = docs['0']['grup']


console.log(docs['0']['nama'])

// ctx.telegram.sendMessage(myid, `/pesan*${ID}*`); 
ctx.telegram.sendMessage(myid, `Pesan: ${psn} \nNama : ${nama} \nkelas : ${kelas}/${grup} \n /pesan1*${ID}*`)
ctx.reply(`${ctx.message.from.first_name} , berhasil mengirim pesan gambar `);

// console.log("2.jika terdaftar")

////////////////////////////////





/////////////////////////////////        
}})});  //user .find({ID:myid})  
}})});  //setting .find(photo)
////////////////////////////////

    }



 
})        //////end /text 
 



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


bot.launch();