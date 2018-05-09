/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

var md = "" +
		"" +
		"Sample Markdown Title\n" +
		"=====================\n" +
		"\n" +
		"Sample Subtitle\n" +
		"---------------\n" +
		"* point\n" +
		"* point\n" +
		"* point\n" +
		"\n";

fs.writeFile('sampleCreate.md', md.trim(), function(err) {
	console.log("File Created");
});


 