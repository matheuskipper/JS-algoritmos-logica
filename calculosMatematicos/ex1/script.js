const frm = document.getElementById('formulario')
const resp1 = document.getElementById('resposta1')
const resp2 = document.getElementById('resposta2')

frm.addEventListener('submit', (e) => {
    const titulo = frm.inTituloFilme.value
    const duracao = Number(frm.inMinutosFilme.value)

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    if(duracao < 60) {
    resp1.innerText = titulo
    resp2.innerText = `${minutos} minuto(s)`
    } else {
    resp1.innerText = titulo
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
    }
    e.preventDefault();
})