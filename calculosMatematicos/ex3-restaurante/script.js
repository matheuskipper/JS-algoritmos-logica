const frm = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

frm.addEventListener('submit', (e) => {
    const kg = Number(frm.inBuffetKg.value);
    const consumo = Number(frm.inConsumoCliente.value);

    const valor = (kg / 1000) * consumo;
    resultado.innerText = `O valor do prato ficou em R$ ${valor.toFixed(2)}`

    e.preventDefault();
})