// function logger(name) {
//     console.log('Hello ' + name);
// }

// logger('Jawahardath')


// const log = require('./logger')  //importing file name
// log.log('test');

// const log = require('./logger');
// log('Thangirala');


// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('totalMemory: ' + totalMemory);
// console.log(`totalMemory: ${totalMemory}`);
// console.log(`freeMemory: ${freeMemory}`);
// console.log(`totalMemory: ${totalMemory} ,freeMemory: ${freeMemory}`);

// const fs = require('fs');
// // var files = fs.readdirSync('./');
// // console.log(files);
// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //Register a Listener
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener is listening the event', arg);
// });

// //Raise an Event
// emitter.emit('messageLogged', {id: '1', url:'http://oneconnect'});

const Logger = require('./logger');
const loggerObj = new Logger();

//Raise a Listener
loggerObj.on('logging' , (arg) => {
    console.log('Listener is listening with arg' , arg);
});

loggerObj.loghere('message');
//Raise an Event
// emitter.emit('logging', {message: 'This is Jawahar Event Request'});