


function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        let [nome, valor] = pedidos[i].split(' ');
        valor = parseFloat(valor);
        total += valor;
    }

    total = total - (total * cupom);
    return total.toFixed(2);
}

//Recupera os valores de entrada, criando um array para os pedidos:
const n = parseInt(gets());
const pedidos = [];
for (let i = 0; i < n; i++) {
    pedidos.push(gets());
}
const cupom = gets().replace('%','');

    const valorFinal = calcularValorTotal(n, pedidos, cupom);

    console.log(`Valor total: ${valorFinal}`);
//TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.

//TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.