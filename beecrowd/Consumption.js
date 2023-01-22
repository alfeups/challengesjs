var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');
let arr = [];

lines.forEach( i =>{
    arr.push(i);
})
let result = (arr[0] / arr[1]).toFixed(3);
console.log(`${result} km/l`)
