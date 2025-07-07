function listNumbers () {
let inNumber = document.getElementById('inNumber');
let result = document.getElementById('result');

let loading = result.innerText = "Carregando...";
let number = Number(inNumber.value);

if (number == 0 || isNaN(number)) {
    alert('Please, use a valid number...');
    inNumber.focus();
    result.innerText = "";
    return;
} else if (number > 1000) {
    alert('The number must be less than 1000');
    inNumber.focus();
    result.innerText = "";
    return;
}

let output = "Between " + number + " and 1: ";

for (var i = number; i > 1; i--) {
    output = output + i + ", ";
}
output = output + i + ".";
setTimeout(() => {
  result.innerText = output;
  loading = true
}, 1000);

}

let btDecrease = document.getElementById('btDecrease');
btDecrease.addEventListener("click", listNumbers);