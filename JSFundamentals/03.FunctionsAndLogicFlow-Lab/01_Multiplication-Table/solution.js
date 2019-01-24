function solve() {
  let firstNumber = Number(document.getElementById("num1").value);
  let multiplier = Number(document.getElementById("num2").value);

  let resultDiv = document.getElementById("result");

  function isInputWrong(firstNumber, multiplier) {
    if (firstNumber > multiplier) {
      resultDiv.innerHTML = "Try with other numbers.";
    }
  }

  function printNumbers(firstNumber, multiplier) {
    for (let i = firstNumber; i <= multiplier; i++) {
      let result = multiplier * i;
      let p = document.createElement("p");
      p.innerHTML=`${i} * ${multiplier} = ${result}`;

      resultDiv.appendChild(p);
    }
  }

  resultDiv.innerHTML="";

  isInputWrong(firstNumber,multiplier);
  printNumbers(firstNumber,multiplier);
}