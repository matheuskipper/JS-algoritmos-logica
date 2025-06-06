const frm = document.getElementById("formulario");
const resp = document.getElementById("resultado");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const nome = frm.inNome.value;
  const hora = new Date().getHours();
  let saudacao;

  if (hora >= 5 && hora < 12) {
    saudacao = "bom dia"
  } else if (hora >= 12 && hora < 18) {
    saudacao = "boa tarde"
  } else {
    saudacao = "Boa noite"
  }

  resp.innerText = `${saudacao}, ${nome}`
})