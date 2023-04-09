const pedido = {
    cliente: {
        nome: gets(),
        endereco: gets(),
        id: parseInt(gets()),
        telefone: gets()
    }
};

console.log(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`);

console.log(`ID: ${pedido.cliente.id}`);

console.log(`Tel: ${pedido.cliente.telefone}`);