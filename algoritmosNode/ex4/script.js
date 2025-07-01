let pecasComputador = ['Memória', 'Processador', 'Fonte', 'SSD'];
console.log('As peças são:');

for(let i = 0; i < pecasComputador.length; i++) {
    console.log(pecasComputador[i]);
}

//------------------------------------------------------------//

let numero = "sequencia: ";
let n = 0;

function imprimirBombachaBagolada (){
    if (n <= 10) {
        console.log(numero + n);
        n++;
        setTimeout(imprimirBombachaBagolada, 1000);
    }
}
imprimirBombachaBagolada();


