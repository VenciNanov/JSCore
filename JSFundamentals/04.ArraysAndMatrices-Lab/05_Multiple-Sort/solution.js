function solve() {
  let array = JSON.parse(document.getElementById("arr").value);



  let outputDiv = document.getElementById("result");

  let ascSort = array.sort((a, b) => a - b);
  let div1 = document.createElement("div");
  div1.textContent = ascSort.join(", ");
  outputDiv.appendChild(div1);

  let alphSort = array.sort();
  let div2 = document.createElement("div");
  div2.textContent = alphSort.join(", ");
  outputDiv.appendChild(div2);

}