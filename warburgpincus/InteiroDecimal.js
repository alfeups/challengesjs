let input = require('fs').readFileSync('stdin', 'utf8');
let valor = input.split('\r\n');

if(valor.includes(",")){
    console.log('Decimal');
} else {
    console.log('Inteiro');
}