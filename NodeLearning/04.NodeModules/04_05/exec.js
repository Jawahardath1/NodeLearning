var exec = require("child_process").exec;

//exec("open http://www.google.com");

exec("git version", function(err, stdout) {

	if (err) {
		throw err;
	}

	console.log("Git Version Executed");

	console.log(stdout);

});
