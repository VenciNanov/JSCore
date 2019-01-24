function solve() {
  let string = document.getElementById("string").value;
  let character = document.getElementById("character").value;

  let result = document.getElementById("result");

  let charCounter = 0;

  function getCountOfCharacters(string, character) {
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (char === character) {
        charCounter++;
      }
    }
  }

  function print() {
    if (charCounter % 2 === 0) {
      result.innerHTML = `Count of ${character} is even.`;
    } else {
      result.innerHTML = `Count of ${character} is odd.`
    }
  }

  getCountOfCharacters(string,character)
  print();
}