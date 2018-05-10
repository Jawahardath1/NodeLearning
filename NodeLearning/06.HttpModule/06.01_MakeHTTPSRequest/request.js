var https = require('https');
var fs	  = require('fs');

var options = {
	hostname:"en.wikipedia.org",
	port:443,
	path:"/wiki/Main_Page",
	method:"GET"
};

var req = https.request(options, function(res) {
	
	var responseBody = '';
	
	console.log("Response Server Started");
	console.log('Server Status: '+res.statusCode);
	console.log('Request Headers: '+req.headers);
	
	res.setEncoding('UTF-8');
	
	res.once("data", function(chunk) {
		console.log(chunk);
	});
	
	res.on("data", function(chunk) {
		console.log('--Chunk-- '+chunk.length);
		responseBody +=chunk;
	});
	
	res.on("end", function(chunk){
		fs.writeFile('main_page.html', responseBody, function(err) {
			if(err) {
				throw err;
			}
			console.log("File Downloaded");
		});
	});
});

req.on("error", function(err){
	console.log('pbm with the request: '+err.message);
});

req.end();