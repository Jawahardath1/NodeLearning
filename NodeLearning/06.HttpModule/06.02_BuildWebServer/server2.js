var http = require("http");

http.createServer( function(request, response) {
	//Send Http Header
	//HTTP Status: 200 :OK
	//Content Type: text/plain
	response.writeHead(200,{'Content-type':'text/plain'});
	
	//send the response body as "Hello Jawahar"
	response.end('Hello Jawahar!');
}).listen(8081);

console.log('Server running at http://localhost:8081/');