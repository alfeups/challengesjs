var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [timeSpent, avSpeed] = lines;
const totalDistance = timeSpent * avSpeed;
const fuelSpent = totalDistance / 12;

console.log(fuelSpent.toFixed(3));