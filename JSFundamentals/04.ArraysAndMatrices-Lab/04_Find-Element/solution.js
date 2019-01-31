function solve() {

  let number = parseInt(document.getElementById("num").value);

  let array = JSON.parse(document.getElementById("arr").value);
  let result = [];

  for (let element of array) {
    let token = element.includes(number);
    let index = element.indexOf(number);
    result.push(token + " -> " + index);
  }

  let outputDiv = document.getElementById("result");
  outputDiv.innerHTML = result;
}
