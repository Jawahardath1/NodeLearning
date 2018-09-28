const EventEmitter = require('events');
//const emitter = new EventEmitter();

class Logger extends EventEmitter {
    loghere(name) {
        console.log('Hello Jawahardath '+name);
    
        //Raise an Event
        this.emit('Logging' ,{id: '1', url:'http://oneconnect'});
    }
    
}

//module.exports.log = loghere;

module.exports = Logger;