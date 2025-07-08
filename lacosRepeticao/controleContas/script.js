let numContas = 0;
let valorTotal = 0;
let resposta = "";

function registrosContas () {
    const inConta = document.getElementById('inConta');
    const inValorConta = document.getElementById('inValorConta');
    const outListaContas = document.getElementById('outListaContas');
    const outTotal = document.getElementById('outTotal');

    const conta = inConta.value;
    const valor = Number(inValorConta.value);

    if (conta == "" || valor == 0 || isNaN(valor)) {
        alert('dados invalidos!');
        return;
    }

    numContas++;
    valorTotal = valorTotal + valor;
    resposta = resposta + conta + " - R$: " + valor.toFixed(2) + "\n";
    outListaContas.textContent = resposta + "------------------------------------"
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valorTotal.toFixed(2);

    inConta.value = "";
    inValorConta.value = "";
    inConta.focus();
}

const btn = document.getElementById('btn');
btn.addEventListener('click', registrosContas);