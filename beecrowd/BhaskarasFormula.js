var input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C] = input.split(" ").map(item => parseFloat(item));

const delta = Math.pow(B , 2) - (4 * A * C);
const R1 = (-B + Math.sqrt(delta)) / (2 * A);
const R2 = (-B - Math.sqrt(delta)) / (2 * A);

if (delta > 0 && B !== 0 && A !== 0 && C !== 0) {
    console.log(`R1 = ${(R1).toFixed(5)}`);
    console.log(`R2 = ${(R2).toFixed(5)}`);
} else{
    console.log(`Impossivel calcular`)
}