/*
Neste desafio temos N moedas que precisam ser organizadas em forma de triângulo, desse modo, 
você deverá escrever um programa que imprima a altura máxima que podemos alcançar usando essas N moedas.
 
Entrada
A primeira linha terá o valor de 1 moeda, a segunda linha terá o valor de 2 moedas e assim por diante.

Saída
A saída consiste no retorno da altura máxima que o triângulos de moedas terá.

Exemplo 1
Entrada	Saída
    7	  3
Explicação: A altura máxima será de 3, colocando 1, 2 e então 3 moedas. Não é possível usar a moeda que irá sobrar.

Exemplo 2
Entrada	Saída
  12	  4
Explicação: A altura máxima será de 4, colocando 1, 2, 3 e 4 moedas, não é possível fazer altura com 5, para isso seria necessário 15 moedas.

*/
let N = parseInt(gets());
let n = 1 + 8 * N; 

let result = Math.floor(-1 + Math.sqrt(n)) / 2;

console.log(result);