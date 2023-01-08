let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\r\n');

let pares = [];
let impares = [];

for (let i = 0; i < lines.length; i++) {
    if (lines[i] % 2 === 0) {
        pares.push(lines[i]);
    }
    if (lines[i] % 3 === 0) {
        impares.push(lines[i]);
    }
}

console.log('Vetor: ', lines);
console.log('Par(es): ', pares);
console.log('Impar(res): ', impares);