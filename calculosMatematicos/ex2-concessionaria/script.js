const frm = document.getElementById('formulario');
const resp1 = document.getElementById('resultadoVeiculo');
const resp2 = document.getElementById('resultadoEntrada');
const resp3 = document.getElementById('resultadoParcelas');

frm.addEventListener('submit', (e) => {

    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50
    const parcela = (preco * 0.50) / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
    resp3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()
})