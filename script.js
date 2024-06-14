//your JS code here. If required.
let student = {
	name: "Jayant Baghel";
}

Object.prototype.getKeys = function() {
	return Object.keys(this);
}

function showKeys() {
	 console.log(student.getKeys);
}