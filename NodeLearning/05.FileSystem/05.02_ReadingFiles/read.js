/**
 * http://usejsdoc.org/
 */

var fs   = require('fs');
var path = require('path');

fs.readdir('./lib', function(err, files) {
	
	files.forEach(function(fileName) {
		var file = path.join(__dirname, 'lib', fileName) ;
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName !=='.DS_Store') {
			fs.readFile(file,'UTF-8', function(err, contents) {
				console.log(contents);				
			});
		}
	});
	
});


//var contents = fs.readFileSync('./lib/sayings.md', 'UTF-8',function(err, contents) {
//	
//	if(err) {
//		console.log(err);
//	}
//	
//}); //always we need to provide Encoding. If not provided then node reads the data in buffer size.
//
//console.log(contents);