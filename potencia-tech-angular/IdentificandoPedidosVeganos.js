const numPedidos = parseInt(gets());

for (let i = 1; i <= numPedidos; i++) {
    const prato = gets();
    const calorias = parseInt(gets());
    const ehVegano = gets().toLowerCase() === 's';

    //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
    if(ehVegano === true) {
        indicadorVegano = 'Vegano';
    } else {
        indicadorVegano = 'Nao-vegano';
    }

    console.log(`Pedido ${i}: ${prato} (${indicadorVegano}) - ${calorias} calorias`);
}