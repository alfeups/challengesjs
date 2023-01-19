var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let velocidadeCarroX = 60;
let velocidadeCarroY = 90;

let tempo = (parseInt(lines) / (velocidadeCarroY - velocidadeCarroX) * 60)
console.log(`${tempo} minutos`);