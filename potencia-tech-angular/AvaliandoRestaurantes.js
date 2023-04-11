const restaurantes = [
    {
        nome: 'restaurante 1',
        avaliacao: 10.0
    },
    {
        nome: 'restaurante 2',
        avaliacao: 20.0
    }
];

const restauranteComMaiorAvaliacao = restaurantes.reduce(
    (restauranteAnterior, restauranteAtual) => {
    return restauranteAtual.avaliacao > restauranteAnterior.avaliacao ? restauranteAtual : restauranteAnterior;
});
let nomeRestaurante = JSON.stringify(restauranteComMaiorAvaliacao.nome).replace(/\"/g, "");
let avaliacaoRestaurante = restauranteComMaiorAvaliacao.avaliacao;
console.log(`Restaurante: ${nomeRestaurante}, Avaliação: ${avaliacaoRestaurante.toFixed(1)}`);
