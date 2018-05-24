var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("printName()", function() {

	it("should print the last name first for Jawhardath", function() {
		var result = tools.printName({first:"Jawahardath", last:"T"});
		
		expect(result).to.equal("T","Jawahardath");
	});
});