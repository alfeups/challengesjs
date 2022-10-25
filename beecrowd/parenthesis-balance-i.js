var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var array = [];
var novoArray = [];
let countLeft = 0;
let countRight = 0;

lines.shift();
console.log(lines);

lines.forEach( linha => {
    array.push(linha);
});

//console.log("antes")
//console.log(array);


array.forEach( item => {
    if (item === "(" || item === ")"){
        novoArray.push(item);
    }
});

//console.log("depois")
//console.log(novoArray);


novoArray.forEach( c => {
    if (c === "(" || c === ")"){
        array.push(c);
    }
});

array.forEach( x => {
    if (x === "("){
        countLeft += 1;
    }

    if (x === ")"){
        countRight += 1;
    }
})

if (countLeft === countRight) {
    if ((array.at(0) === ")" && (array.reverse().at(0)) === "(")) {
        console.log("incorrect");
    } else
        console.log("correct");
} else
    console.log("incorrect");