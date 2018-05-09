/**
 * http://usejsdoc.org/
 */


var fs = require("fs");


fs.renameSync("./lib/project-config.js", "./lib/config.json"); //changing file name from project-config.js to config.json,  under the same lib folder

console.log("Config json file renamed from project-config.js to config.json under LIB folder");

fs.rename("./lib/notes.md", "./notes.md", function(err) { //moving file from lib/notes.md to notes.md

	if (err) {
		console.log(err);
	} else {
		console.log("notes.md moved successfully");
	}

});