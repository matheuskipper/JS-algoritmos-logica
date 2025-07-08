const prompt = require("prompt-sync")();

function listNumbers() {
  const number = prompt("Number: ");

  if (number == 0 || isNaN(number)) {
    console.log("Please, use a valid number...");
    return;
  } else if (number > 1000) {
    console.log("The number must be less than 1000");
    return;
  }

  let result = "Between " + number + " and 1: ";

  for (var i = number; i > 1; i--) {
    result = result + i + ", ";
  }
  result = result + i + ".";
  setTimeout(() => {
    console.log(result);
  }, 1000);
}

listNumbers();
