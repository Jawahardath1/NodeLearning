var Person = require("./lib/Person");

var ben = new Person("Jawahar Dath");
var george = new Person("Manasa Katta");


george.on('speak', function(said) {

	console.log(this.name +'->'+said);

});

ben.on('speak', function(said) {
	console.log(this.name +':'+said);

});


ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company.");
