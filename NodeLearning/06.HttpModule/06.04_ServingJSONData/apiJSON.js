/**
 * http://usejsdoc.org/
 */

var http = require('http');

var data = require('./data/inventory');


function listInStock(res) {
	
	var inStock = data.filter(function(item) {
		return item.avail ==="In stock";
	});
	
	res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res) {
	
	var onBackOrder = data.filter(function(item) {
		return item.avail === "On back order";
	});
	
	res.end(JSON.stringify(onBackOrder));
}


//Main Function
http.createServer(function(req, res) {
	
	if (req.url ==="/") {
		res.writeHead(200, {'Content-Type':'text/json'});		
		res.end(JSON.stringify(data));
	} else if(req.url ==="/instock") {
		listInStock(res);
	} else if(req.url ==="/onorder") {
		listOnBackOrder(res);
	} else {
		res.writeHead(404,{'Content-Type':'text/plain'});
		res.end("Whoops.. Data not found");
	}
	
	
}).listen(8080);

console.log("Server Listening on port 8080 at localhost");

