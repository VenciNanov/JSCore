function solve() {
  let string = document.getElementById("str").value;;
  let messageInput = document.getElementById("text").value;

  //REGEXP
  let pattern = /(north|east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;
  let mesagePattern = new RegExp(`${string}([\\s\\S]*)${string}`, 'gim');

  let north = "";
  let east = "";

  let currentMatch = pattern.exec(messageInput);
  while (currentMatch) {
    if (currentMatch[1].toLocaleLowerCase() === "north") {
      north = `${currentMatch[2]}.${currentMatch[3]} N`;
    } else {
      east = `${currentMatch[2]}.${currentMatch[3]} E`;
    }

    currentMatch = pattern.exec(messageInput);
  }

  let secretMessage = "Message: " + mesagePattern.exec(messageInput)[1];

  let result = document.getElementById("result")

  let nortP = document.createElement("p");
  nortP.textContent = north;
  let eastP = document.createElement("p");
  eastP.textContent = east;
  let messageP = document.createElement("p");
  messageP.textContent = secretMessage;

  result.appendChild(nortP);
  result.appendChild(eastP);
  result.appendChild(messageP);
  

  //






}