//-------------Exemplo 1-------------//
console.log('===== Exemplo 1 =====');

let pecasComputador = ['Memória', 'Processador', 'Fonte', 'SSD'];
console.log('As peças são:');

for(let i = 0; i < pecasComputador.length; i++) {
    console.log(pecasComputador[i]);
}

//-------------Exemplo 2-------------//
console.log('===== Exemplo 2 =====');

let nums = [10, 20, 30, 50];
let soma = 0;

for (let i = 0; i < nums.length; i++) {
    soma = soma + nums[i];
    
}
console.log('A soma da lista é: ' + soma);