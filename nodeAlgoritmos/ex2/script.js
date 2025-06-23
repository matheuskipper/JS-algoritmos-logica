const prompt = require("prompt-sync")();

const produto = prompt("Insira o medicamento: ");
const preco = Number(prompt(`qual o valor do produto "${produto}"? `));

const desconto = preco * 0.1;
const valorComDesconto = preco - desconto;

if (produto == "" || preco == "") {
  console.log("Preencha os dois campos para prosseguir");
} else {
  console.log(
    `Promoção: ${produto} - De R$ ${preco} por R$ ${valorComDesconto}`
  );
}
