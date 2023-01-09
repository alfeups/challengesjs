let input = require('fs').readFileSync('stdin', 'utf8');
let strSplit = input.split('');


let blank = [' '];
let countVowels = 0;
let countBlank = 0;



for (let i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].toString().toLowerCase();
    if (isEqual(strSplit[i])) {
        countVowels += 1;
    }
    if (strSplit[i].includes(blank)) {
        countBlank += 1;
    }
}

function isEqual(str){
    if (str.match('^([aeiouyAEIOUY]+)$')){
        return true;
    }
}
console.log(`Espacos em branco: ${countBlank}`, `Vogais: ${countVowels}`);