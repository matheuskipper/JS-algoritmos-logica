const frm = document.getElementById("formulario")
const resp = document.getElementById("resultado")

frm.addEventListener("submit", (e) => {
    const numero1 = document.getElementById("inNumero1")
    const numero2 = document.getElementById("inNumero2")
    const operacao = Number(numero1.value) + Number(numero2.value)
    resp.innerText = `A soma dos números é ${operacao}`


    e.preventDefault()  
    console.log(operacao);
    
})