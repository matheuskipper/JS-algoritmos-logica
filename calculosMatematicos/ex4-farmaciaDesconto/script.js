const frm = document.getElementById('formulario');
const result = document.getElementById('resultado');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = frm.iNomeProduto.value;
    const preco = Number(frm.inPreco.value);
})