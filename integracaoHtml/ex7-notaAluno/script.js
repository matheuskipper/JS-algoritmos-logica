const frm = document.getElementById("formulario");
const result1 = document.getElementById("resultado1");
const result2 = document.getElementById("resultado2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;

  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);
  const nota3 = Number(frm.inNota3.value);

  const somaNotas = nota1 + nota2 + nota3;
  const mediaNotas = somaNotas / 3;

  if (mediaNotas >= 6) {
    result1.innerText = `Aluno: ${nome}`;
    result2.innerText = `A média do aluno foi: ${mediaNotas.toFixed(
      1
    )} - Parabéns! Você está aprovado!`;
    result2.style.color = "blue";
  } else if (mediaNotas >= 4) {
    result1.innerText = `Aluno: ${nome}`;
    result2.innerText = `A  média do aluno foi: ${mediaNotas.toFixed(
      1
    )} - Atenção, o aluno está em recuperação!`;
    result2.style.color = "yellow";
  } else {
    result1.innerText = `Aluno: ${nome}`;
    result2.innerText = `A média do aluno foi: ${mediaNotas.toFixed(
      1
    )} - Infelizmente, você está reprovado...`;
    result2.style.color = "red";
  }
});
