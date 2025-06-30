const prompt = require("prompt-sync")();

const numeroPessoas = Number(prompt('Nº de pessoas: '));
const numeroPeixes = Number(prompt('Nº de peixes: '));
let pagar;

if(numeroPeixes <= numeroPessoas){
    pagar = numeroPessoas * 20;
} else {
    pagar = (numeroPessoas * 20) + ((numeroPeixes - numeroPessoas) * 12);
};

console.log(`Total a pagar: R$ ${pagar.toFixed(2)}`);