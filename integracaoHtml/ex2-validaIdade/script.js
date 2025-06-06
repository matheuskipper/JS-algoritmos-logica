const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const valorIdade = document.getElementById("idade");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  if (Number(valorIdade.value >= 18 && valorIdade.value < 122)) {
    resp.innerText = `Olá ${nome}, você é maior de idade`;
  } else if (Number(valorIdade.value <= 17)) {
    resp.innerText = `Olá ${nome}, você é menor de idade`;
  } else if (Number(valorIdade.value >= 122)) {
    resp.innerText = `Olá ${nome}, com essa idade, você deveria estar morto!`;
  }

  e.preventDefault();
});
