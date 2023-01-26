var input = require('fs').readFileSync('stdin', 'utf8');

let valorTotal = parseFloat(input).toFixed(2);
const valores = [100, 50, 20, 10, 5, 2,1, 0.50, 0.25, 0.10, 0.05, 0.01];
let resultado = [];

for(let valor of valores){
    resultado.push(Math.floor(parseInt(valorTotal/valor)));
    valorTotal %= valor;
}

console.log(`NOTAS:`);
console.log(`${parseInt(resultado[0])} nota(s) de R$ 100.00`);
console.log(`${parseInt(resultado[1])} nota(s) de R$ 50.00`);
console.log(`${parseInt(resultado[2])} nota(s) de R$ 20.00`);
console.log(`${parseInt(resultado[3])} nota(s) de R$ 10.00`);
console.log(`${parseInt(resultado[4])} nota(s) de R$ 5.00`);
console.log(`${parseInt(resultado[5])} nota(s) de R$ 2.00`);
console.log(`MOEDAS:`);
console.log(`${parseInt(resultado[6])} moeda(s) de R$ 1.00`);
console.log(`${parseInt(resultado[7])} moeda(s) de R$ 0.50`);
console.log(`${parseInt(resultado[8])} moeda(s) de R$ 0.25`);
console.log(`${parseInt(resultado[9])} moeda(s) de R$ 0.10`);
console.log(`${parseInt(resultado[10])} moeda(s) de R$ 0.05`);
console.log(`${parseInt(resultado[11])} moeda(s) de R$ 0.01`);