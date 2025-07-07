function listNumbers () {
let inNumber = document.getElementById('inNumber');
let result = document.getElementById('result');

let number = Number(inNumber.value);

if (number == 0 || isNaN(number)) {
    alert('Please, use a valid number...');
    inNumber.focus();
    return;
} else if (number > 1000) {
    alert('The number must be less than 1000');
    inNumber.focus();
    return;
}

let output = "Between " + number + " and 1: ";

for (var i = number; i > 1; i--) {
    output = output + i + ", ";
}
output = output + i + ".";
result.innerText = output;
}

let btDecrease = document.getElementById('btDecrease');
btDecrease.addEventListener("click", listNumbers);