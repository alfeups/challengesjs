var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let nCases = lines[0];
let nPeople = 0;
let sizeSteps = 0;


for(let i = 1; i <= nCases; i++) {
        [nPeople, sizeSteps] = lines[i].split(" ");
        let result = getSobrevivente(nPeople, sizeSteps);
    console.log(`Case ${i}: ${result}`);
}

function getSobrevivente(nPeople, sizeSteps) {
    if (nPeople === 1) {
        return 1;
    } else {
        return (getSobrevivente(nPeople - 1, sizeSteps) + sizeSteps - 1) % nPeople + 1;
    }
}
