var input = require('fs').readFileSync('stdin', 'utf8');
var valores = Array.from(input.split("\r\n"));

let nCases = valores[0];
let x, y;

for(let i = 1; i <= nCases; i++){
        [x, y] = valores[i].split(" ");
        let result = (x * y) / 2;
        console.log(`${parseInt(result)} cm2`);
}