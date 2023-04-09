const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

const valorTotalHamb = valorHamburguer * quantidadeHamburguer;
const valorTotalBebida = valorBebida * quantidadeBebida;

const total = valorTotalHamb + valorTotalBebida;
const troco = valorPago - total;

console.log(`O preço final do pedido é R$ ${total}.00. Seu troco é R$ ${troco}.00.`);