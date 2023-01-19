var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').join(' ').split(' ');

let distancia = Math.pow((lines[2] - lines[0]), 2) + Math.pow((lines[3] - lines[1]), 2);

console.log(Math.sqrt(distancia).toFixed(4));