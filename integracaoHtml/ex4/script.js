const form = document.getElementById("formulario")
const result = document.getElementById("resultado")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = document.getElementById('inPassword')
    const password2 = document.getElementById('inConfirmPassord')

    if (password.value != password2.value) {
        result.innerText = 'as senhas não conferem!'
    } else if (password.value.length > 6 && password2.value.length > 6) {
        result.innerText = 'a senha deve ter 6 caracteres'

    } else {
        result.innerText = 'as senhas estao iguais!'
    }

    if (password.value == "" || password2.value == "") {
        result.innerText = 'Preencha a senha'
    }

    console.log(password.value, password2.value);
    
})