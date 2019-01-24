function solve() {
  let string = document.getElementById("string").value;
  let result = document.getElementById("result");

  let uniqueChars = "";

  function isCharWhiteSpace(i) {
    if (string[i] === " ") {
      uniqueChars += string[i];
    }
  }

  function isCurrentCharUnique(i) {
    if (!uniqueChars.includes(string[i])) {
      uniqueChars += string[i];
    }
  }

  function findUniqueChars(string) {
    for (let i = 0; i < string.length; i++) {
      isCharWhiteSpace(i);
      isCurrentCharUnique(i);
    }
  }

  findUniqueChars(string);
  result.innerHTML = uniqueChars;
}