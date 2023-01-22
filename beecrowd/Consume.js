var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [distancia, combustivelConsumido] = input.split('\n');

const mediaDeConsumo = distancia / combustivelConsumido;

console.log(mediaDeConsumo.toFixed(3) + " km/l");

