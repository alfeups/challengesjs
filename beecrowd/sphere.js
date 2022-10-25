var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var r = parseFloat(input);
let pi = 3.14159;

let volume = (4/3.0) * pi * Math.pow(r, 3);

console.log("VOLUME = " + volume.toFixed(3 ));