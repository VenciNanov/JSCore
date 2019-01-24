function solve() {
  let startNumber = Number(document.getElementById("firstNumber").value);
  let endNumber = Number(document.getElementById("secondNumber").value);
  let firstWord = document.getElementById("firstString").value;
  let secondWord = document.getElementById("secondString").value;
  let thirdWord = document.getElementById("thirdString").value;
  let resultDiv = document.getElementById("result");

  function checkCurrentNumber(i) {
    let p = document.createElement("p");
    if (i % 3 === 0 && i % 5 === 0) {
      p.innerHTML = `${i} ${firstWord}-${secondWord}-${thirdWord}`
    } else if (i % 3 === 0) {
      p.innerHTML = `${i} ${secondWord}`;
    } else if (i % 5 === 0) {
      p.innerHTML = `${i} ${thirdWord}`;
    } else {
      p.innerHTML = i;
    }
    resultDiv.appendChild(p);
  }

  for (let i = startNumber; i <= endNumber; i++) {
    checkCurrentNumber(i);
  }
}