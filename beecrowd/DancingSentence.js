var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var temporaria = 'a';
const array = [];

input.trim().split('').forEach(c => {
    if (isLetraPassadaUpperCase(temporaria) && c !== " ") {
        array.push(c.toLowerCase());
        temporaria = c.toLowerCase()
    } else if (isLetraPassadaLowerCase(temporaria) && c !== " ") {
        array.push(c.toUpperCase());
        temporaria = c.toUpperCase();
    } else if (c === " ") {
        array.push(" ");
    }
});


function isLetraPassadaUpperCase(letra){
    if (letra.toUpperCase() === letra){
        return true;
    }
}

function isLetraPassadaLowerCase(letra){
    if (letra.toLowerCase() === letra){
        return true;
    }
}
var newArray = array.toString();
console.log(newArray.replace(/[,]+/g,'').trim());