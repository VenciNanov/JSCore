function solve() {
  let array = JSON.parse(document.getElementById("arr").value);

  let outputDiv = document.getElementById("result");
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let p = document.createElement("p");
    p.textContent = `${i} -> ${array[i] * array.length}`;

    outputDiv.appendChild(p);
  }

}