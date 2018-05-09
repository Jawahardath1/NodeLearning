/**
 * http://usejsdoc.org/
 */

var fs = require("fs");

/*fs.renameSync("./assets/logs", "./logs");

console.log("Config directory moved");
*/

fs.readdirSync("./logs").forEach(function(fileName) {

	fs.unlinkSync("./logs/" + fileName);

});

fs.rmdir("./logs", function(err) {

	if (err) {
		throw err;
	}

	console.log("Logs directory removed");

});