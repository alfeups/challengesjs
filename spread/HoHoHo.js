let lines = gets().split("\n");
let N = parseInt(lines.shift());
let frase = '';

for (let i = 1; i <= N; i++) {
    if (i !== N) {
        frase += ' Ho';
    } else {
        frase += ' Ho!';
    }
}
console.log(frase);