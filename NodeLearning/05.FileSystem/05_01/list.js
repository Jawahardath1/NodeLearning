var fs = require("fs");

//fs.readdir('./lib', function(err, files) {
//
//	if (err) {
//		throw err;
//	}
//
//	console.log(files);
//
//});
//
//console.log("Reading Files...");


fs.readdir('./Ch05/05_01/lib', function(err, filese) {
	if(err) {
		throw err;
	}
	console.log(files);
});

console.log("Reading Files...");
