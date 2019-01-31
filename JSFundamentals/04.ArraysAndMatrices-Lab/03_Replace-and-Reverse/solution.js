function solve() {
  let arrayInput = JSON.parse(document.getElementById("arr").value);

  arrayInput.forEach((element, index) => {
    arrayInput[index] = element.split("").reverse().join("");
  });

  arrayInput.forEach((element, index) => {
    arrayInput[index] = element.charAt(0).toUpperCase().concat(element.slice(1));
  });

  let result = arrayInput.join(" ");
  document.getElementById("result").innerHTML = result;
}