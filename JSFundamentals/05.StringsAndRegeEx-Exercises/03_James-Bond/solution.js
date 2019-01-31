function solve() {

  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }

  let inputArr = JSON.parse(document.getElementById("arr").value);
  let text = inputArr[1];
  let secretWord = inputArr[0];
  let result = document.getElementById("result");
  inputArr.shift();
 
  let message = inputArr;
  let pattern = RegExp(`(?<= |^)${secretWord}(?= |$) +([A-Z!%$#]{8,})(?=[ .,]|$)`, "gmi")


  let output = "";
  for (let i = 0; i < message.length; i++) {
    let temp = pattern.exec(message[i]);
    while (temp) {
      if (!hasLowerCase(temp[1])) {
        let decodedWord = getHiddenMessageInWord(temp[1]);
      
        let fancyWord = temp[0].split(" ");

        message[i] = message[i].replaceAt(temp.index, fancyWord[0] + " " + decodedWord);

      }
      temp = pattern.exec(message[i]);
    }
    let p = document.createElement("p");
    p.innerHTML = message[i];
    result.appendChild(p);

  }

  function hasLowerCase(str) {
    return (/[a-z]/.test(str));
  }

  function getHiddenMessageInWord(word) {
    for (let i = 0; i < word.length; i++) {
      let element = word[i];
      if (element === "!") {
        word = word.replace("!", "1");
      } else if (element === "%") {
        word = word.replace("%", "2");
      } else if (element === "#") {
        word = word.replace("#", "3");
      } else if (element === "$") {
        word = word.replace("$", "4");
      }
    }

    word = word.toLowerCase();
    return word;
  }
}
