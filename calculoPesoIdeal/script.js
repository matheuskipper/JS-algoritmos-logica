const frm = document.getElementById("formulario");
const result = document.getElementById("resultado");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("inNome").value;
  let altura = parseFloat(document.getElementById("inAltura").value);
  const sexoselecionado = document.querySelector('input[name="sexo"]:checked');
  const sexo = sexoselecionado.value;

  if (altura > 3) {
    altura = altura / 100;
  }

  // Pode ser feito com essa estrutura condicional:
  function calculoPeso() {
    if (sexo == "masculino") {
      return (
        nome + ", Seu peso ideal é: " + (22 * (altura * altura)).toFixed(2)
      );
    } else {
      return (
        nome + ", Seu peso ideal é: " + (21 * (altura * altura)).toFixed(2)
      );
    }
  }

  // OU essa:
  function calculoPeso() {
    return sexo === "masculino"
      ? nome + ", Seu peso ideal é: " + (22 * (altura * altura)).toFixed(2)
      : nome + ", Seu peso ideal é: " + (21 * (altura * altura)).toFixed(2);
  }
  result.innerText = calculoPeso();
});
