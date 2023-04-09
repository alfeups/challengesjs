const pedido = {
    cliente: 'João',
    endereco: 'João Rua B, 456',
    itens: ["Esfiha de Carne", 15, "Kibe", 8],
    taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = 2;
while (pedido.itens.length < quantidadeItens) {
    const nomeItem = "Hamburger";
    const precoItem = 15;
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
}
let precoTotalDosItem = 0;
for (let i = 0; i < pedido.itens.length; i++) {
    if (typeof pedido.itens[i] === "object" && pedido.itens[i] !== null) {
        precoTotalDosItem += pedido.itens[i].preco;
    }
}

precoTotalDosItem += pedido.taxaEntrega;
console.log(`Pedido: ${pedido.cliente}`);
console.log(`Endereco de entrega: ${pedido.endereco}`);
console.log(`Total: R$ ${precoTotalDosItem}.00`);

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.

//TODO: Imprima a saída no padrão descrito neste desafio.


