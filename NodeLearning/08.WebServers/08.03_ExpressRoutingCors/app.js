/**
 * http://usejsdoc.org/
 */
var express = require('express');
var cors = require('cors');

var app = express();

var dathTerms = [
	{
		term: "Rip",
		defined: "To move at a rate of speed"
	},
	{
		term: "Huck",
		defined: "To throw your body off something"
	},
	{
		term:"Chowder",
		defined: "Powder after it has been sufficiently skied"
	}
];


app.use(function(req, res, next) {
	console.log(req.method +' request for '+req.url);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api",function(req,res){
	res.json(dathTerms);
});

app.listen(3000);

console.log("Server running on port 3000");

module.exports=app;