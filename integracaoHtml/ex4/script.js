const frm = document.getElementById("formulario")
const resp = document.getElementById("resultado")

frm.addEventListener("submit", (e) => {
    const senha = document.getElementById("inSenha")
    const confirmaSenha = document.getElementById("inConfirmaSenha")
    const validacao = () => {
        if(senha.value != confirmaSenha.value){
            resp.innerText = "As senhas não são iguais!"
        } else if (senha.value == "" || confirmaSenha.value == "") {
            resp.innerText = "Preencha os campos!"
        } else {
            resp.innerText = "As senhas são iguais!"
        }
    } 
    validacao();
    e.preventDefault()  
    console.log(senha.value, confirmaSenha.value);
    
})