var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let arr;

lines.forEach((valorC) => {
    if (valorC !== "") {
        arr = new Uint32Array(3);
        arr[0] = /\d+/.exec(valorC);
        arr[1] = /(?<=\s)\d+/.exec(valorC);
        arr[2] = arr[0] ^ arr[1];
        console.log(arr[2]);
    }
});