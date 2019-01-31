function solve() {
  let array = JSON.parse(document.getElementById("arr").value);
  let string = document.getElementById("str").value;
  let result = document.getElementById("result");
  console.log(array);

  let wordToReplace = array[0].split(" ")[2].toLowerCase();
  let regex = new RegExp(wordToReplace, "ig");

  for (let i = 0; i < array.length; i++) {
    let tokens = array[i].split(" ");
    let output = []
    for (let j = 0; j < tokens.length; j++) {
      if (tokens[j].toLowerCase() == wordToReplace || tokens[j].toLowerCase().includes(wordToReplace)) {
        // output.push(string);
        let temp = tokens[j];
        let replaced = temp.replace(regex, string);
        output.push(replaced);
      }
      else output.push(tokens[j]);
    }
    let p = document.createElement("p");
    p.innerHTML = output.join(" ");
    result.appendChild(p);
  }
}