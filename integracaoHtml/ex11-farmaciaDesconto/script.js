const frm = document.getElementById('formulario');
const result = document.getElementById('resultado');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = frm.iNomeProduto.value;
    const preco = Number(frm.inPreco.value);

    const desconto = preco * 0.10;
    const valorComDesconto = preco - desconto;

    if (produto == '' || preco == ''){
        result.innerText = 'Preencha os dois campos para prosseguir'
    } else {
        result.innerText = `Promoção: ${produto} - De R$ ${preco} por R$ ${valorComDesconto}`
    }
});