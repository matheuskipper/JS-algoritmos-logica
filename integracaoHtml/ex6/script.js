const frm = document.getElementById("formulario");
const resp = document.getElementById("resultado");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value;

    const tamanho = frase.length;

    resp.innerText = `Sua frase tem ${tamanho} caracteres`
})