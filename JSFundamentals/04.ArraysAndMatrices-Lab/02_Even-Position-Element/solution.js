function solve() {
  let array = JSON.parse(document.getElementById("arr").value);

  let outputDiv = document.getElementById("result");
  let resultArray = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (i % 2 === 0) {
      resultArray.push(element);
    }
  }
  let result = resultArray.join(" x ");
  outputDiv.textContent = result;
}