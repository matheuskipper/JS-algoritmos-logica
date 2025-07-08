const prompt = require("prompt-sync")();

// WHILE
let numero = Number(prompt("insira um numero: "));
if (numero == 0 || isNaN(numero)) {
  console.log("insira um numero valido...");
} else if (numero > 100) {
  console.log("o numero deve ser no máximo 100");
} else {
  while (numero > 0) {
    numero -= 1;
    console.log(numero);
  }
}

// DO... WHILE
let numero2 = Number(prompt("Outro numero: "));
if (numero2 == 0 || isNaN(numero2)) {
  console.log("insira um numero valido...");
} else if (numero2 > 100) {
  console.log("o numero deve ser no máximo 100");
} else {
  do {
    numero2 += 1;
    console.log(numero2);
  } while (numero2 < 50);
}
