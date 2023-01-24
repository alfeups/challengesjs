var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let segundos = parseInt(input);

const unidadesTempo = [3600, 60, 1];
const result = [];

for (let unidade of unidadesTempo){
    result.push(parseInt(segundos/unidade));
    segundos %= unidade;
}

console.log(result.join(":"));