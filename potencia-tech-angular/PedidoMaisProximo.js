const pedidos = [
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets())
    },
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets())
    },
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets())
    }
];


const pedidoMenorDistance = pedidos.reduce(
    (pedidoAnterior, pedidoAtual) => {
        return pedidoAtual.distancia < pedidoAnterior.distancia ? pedidoAtual : pedidoAnterior;
    });


console.log(`O pedido mais próximo é o de ${pedidoMenorDistance.nome}, do tipo ${pedidoMenorDistance.tipo}`);