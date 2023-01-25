var input = require('fs').readFileSync('stdin', 'utf8');

let days = parseInt(input);
let resultado = [];

const valores = [365, 30, 1];

for(let valor of valores){
    resultado.push(parseInt(days/valor));
    days %= valor;
}
console.log(`${resultado[0]} ano(s)`);
console.log(`${resultado[1]} mes(es)`);
console.log(`${resultado[2]} dia(s)`);
