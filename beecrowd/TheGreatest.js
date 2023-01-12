var input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C] = input.split(" ").map(item => parseInt(item));
var maior = Math.max(A, B, C);

console.log(maior + " eh o maior");