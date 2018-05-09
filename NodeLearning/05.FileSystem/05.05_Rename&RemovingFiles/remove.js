/**
 * http://usejsdoc.org/
 */

var fs = require("fs");

try {
	fs.unlinkSync("./lib/config - Copy.json");
} catch (err) {
	console.log(err);
}

fs.unlink("notes - Copy.md", function(err) {

	if (err) {
		console.log(err);
	} else {
		console.log("notes - Copy.md removed");
	}

});



