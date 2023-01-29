var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');


let a = lines.sort(function(a, b) {
    return a - b;
});

a.shift();
a.pop();

console.log(parseInt(a));
