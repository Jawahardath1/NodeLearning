/**
 * http://usejsdoc.org/
 */
var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
var app = express();

var dathTerms = [
	{
		term: "Apple",
		defined: "Its a Fruit that starts with letter A"
	},
	{
		term: "Brinjal",
		defined: "Its a vegetable, also called as EggPlant"
	},
	{
		term:"Jawahardath",
		defined: "The developer of this Program"
	}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
	console.log(req.method +' request for '+req.url+' - '+JSON.stringify(req.body));
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api",function(req,res){
	res.json(dathTerms);
});

app.post("/dictionary-api", function(req,res){
	dathTerms.push(req.body);
	res.json(dathTerms);
});

app.delete("/dictionary-api/:term", function(req,res) {
	dathTerms = dathTerms.filter(function(definition) {
		return definition.term.toLowerCase() !== req.params.term.toLowerCase();
	});
	res.json(dathTerms);
});

app.listen(3000);

console.log("Server running on port 3000");

module.exports=app;