const prompt = require('prompt-sync')();

const carrosPorMarca = {
    chevrolet: ['onix', 'prisma', 'celta', 'camaro'],
    fiat: ['argo', 'fastback', 'uno', 'strada'],
    volkswagen: ['gol', 'polo', 'nivus'],
    ford: ['fiesta', 'ka', 'mustang']
}

const nome = prompt('Qual seu nome? ');
let carro = prompt('Qual marca de carro você procura? (ex: chevrolet, fiat, volkswagen, ford)');
carro = carro.toLowerCase();

if (carrosPorMarca[carro]){
    console.log(`${nome}, aqui estão os carros disponíveis da marca ${carro}:`)
    console.log(carrosPorMarca[carro].join(', '));
} else {
    console.log('Desculpe, não temos nenhum carro desta marca.');
}
