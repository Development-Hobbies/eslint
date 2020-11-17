function singleQoute() {
	// return 'a';
	return "a"; // using a single qoute will get an error
}

function noSemiColon() {
	// return "a"
	return "a"; // without semicolon every end of expression will get an error
}

const Hello = require("./more-code");
console.log(Hello);

console.log("Success");
