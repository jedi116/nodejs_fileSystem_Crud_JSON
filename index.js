// Import required dependencies 

var lib = require("./lib");
var fs = require('fs');

lib.create('test', 'first_test', { "this": "is the first test" }, function(err) {
    console.log(err);
    console.log(lib.baseDir);
});