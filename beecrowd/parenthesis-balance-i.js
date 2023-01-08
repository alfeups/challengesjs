var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var linha = lines.shift().trim();


function tratarLinha(linha) {
        return !linha.split("").reduce(function (previous, char) {
            if (previous < 0) {
                return previous;
            }
            if (char === "(") {
                ++previous;
            }
            if (char === ")") {
                --previous;
            }
        }, 0);
}

console.log(tratarLinha(lines));

