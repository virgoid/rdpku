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
  debug: false
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


var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const { hostname } = require('os');
// const url = "mongodb://127.0.0.1:27017/";
const url ="mongodb+srv://user3:user2@cluster0.meaflsf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url);

var db1 = mongoose.connection
db1.on('error', console.error.bind(console, 'connection error:'));
db1.once('open', function() { 
  console.log('connection mogodb success'); 
});

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
    
    
          db.close();
        });
       
      });














client.on('message', msg => {
  console.log(msg);
  const conten      = msg.body.toLowerCase();
  if (msg.body == '!ping') {
    msg.reply('pong');
  } else if (msg.body == '1') {

    MongoClient.connect(url, function (err, client1) {   //setting .find(photo)
   
      var db = client1.db("data_smk");
      
      var query = { NHP : '6285244303838' };
      db.collection("siswa").find(query).toArray(function (err, docs) {
       console.log(docs.length); 
        if (!docs.length >= 1){console.log("anda bukan siswa");}else{
   
          console.log("1.jika sudah akstif")
          msg.reply('pong');
          MongoClient.connect(url, function (err, client2) {   //user .find({ID:myid})
            var db = client2.db("data_smk");
            var query = { NHP : NHP };
            db.collection("siswa").find(query).toArray(function (err, docs) {
             console.log(docs.length); 
              if (!docs.length >= 1){console.log("belum terdaftar");}else{
        //////////////////////////////////////////////  
          console.log("2.jika terdaftar")
          msg.reply('pong1');
       /////////////////////////////////        
        }})});  //user .find({ID:myid})  
        }})});  //setting .find(photo)
      ////////////////////////////////








    msg.reply('selamat pagi');
  }else if (msg.body == 'cek') {
    console.log(msg.body);
    // bot.command(['cek'], async (ctx) => {
        const NHP = msg.from.split('@')[0]; 
    // const conten      = msg.body.toLowerCase();
        //const ID = msg.message.chat.id 
        console.log(NHP);
        MongoClient.connect(url, function(err, db) {
          // if (err) throw err;
          var dbo = db.db('data_smk');
          var query = { NHP : NHP };
          dbo.collection('siswa').find(query).toArray(function(err, result) {
            // if (err) throw err;
          ////////////////////////////////////////////////////
            // console.log(result[0].ID);
            // console.log(result.length);
            console.log(result);
      
            
      if (result.length >= 1){
        const ids =result[0].ids
            const id =result[0].ID
            const nama =result[0].nama
            const kelas =result[0].kelas
            const nohp =result[0].NHP
          msg.reply(`anda sudah terdaftar  \nids : ${ids} \nID : ${id} \nNama : ${nama} \nKelas : ${kelas} \nnowa : ${nohp} \n\n`)     
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
          });
         
        });
  }

  // NOTE!
  // UNCOMMENT THE SCRIPT BELOW IF YOU WANT TO SAVE THE MESSAGE MEDIA FILES
  // Downloading media
  // if (msg.hasMedia) {
  //   msg.downloadMedia().then(media => {
  //     // To better understanding
  //     // Please look at the console what data we get
  //     console.log(media);

  //     if (media) {
  //       // The folder to store: change as you want!
  //       // Create if not exists
  //       const mediaPath = './downloaded-media/';

  //       if (!fs.existsSync(mediaPath)) {
  //         fs.mkdirSync(mediaPath);
  //       }

  //       // Get the file extension by mime-type
  //       const extension = mime.extension(media.mimetype);
        
  //       // Filename: change as you want! 
  //       // I will use the time for this example
  //       // Why not use media.filename? Because the value is not certain exists
  //       const filename = new Date().getTime();

  //       const fullFilename = mediaPath + filename + '.' + extension;

  //       // Save to file
  //       try {
  //         fs.writeFileSync(fullFilename, media.data, { encoding: 'base64' }); 
  //         console.log('File downloaded successfully!', fullFilename);
  //       } catch (err) {
  //         console.log('Failed to save the file:', err);
  //       }
  //     }
  //   });
  // }
});

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
