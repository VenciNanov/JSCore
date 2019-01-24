function solve() {
  let degrees = Number(document.getElementById("num1").value);
  let type = document.getElementById("type").value;

  let isCorrectType = false;
  let convertedTemperature = 0;
  let result = "";

  function convert(degrees, type) {
    if (type.toLowerCase() === "fahrenheit") {
      convertedTemperature = (((degrees - 32) * 5) / 9);
      isCorrectType = true;
    } else if (type.toLowerCase() === "celsius") {
      convertedTemperature = ((degrees * 9) / 5) + 32;
      isCorrectType = true;
    }
  }
  function print() {
    if (isCorrectType) {
      result = Math.round(convertedTemperature);
    } else {
      result = "Error!";
    }
  }

  convert(degrees,type);
  print();
  document.getElementById("result").innerHTML=result;

}