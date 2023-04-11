var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const [x1, y1] = lines[0].split(" ");
const [x2, y2] = lines[1].split(" ");

const distancia = Math.sqrt((Math.pow(x2 -x1, 2) + Math.pow(y2 - y1, 2)));

console.log(distancia.toFixed(4));