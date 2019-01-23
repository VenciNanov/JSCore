
function register() {

  let usernameElement = document.getElementById("username").value;
  let emailElement = document.getElementById("email").value;
  let passwordElement = document.getElementById("password").value;

  let pattern = /(.+)@(.+).(com|bg)/gm

  if (usernameElement && pattern.test(emailElement) && passwordElement) {

    let selection = document.getElementById("result");
    let headerNode = document.createElement("h1");

    let headerTextNode = document.createTextNode("Successful Registration!")
    headerNode.appendChild(headerTextNode);
    selection.appendChild(headerNode);

    selection.innerHTML += `Username: ${usernameElement}
    <br>Email: ${emailElement}
    <br>Password: ${"*".repeat(passwordElement.length)}`;

  }

  
  setTimeout(() => {
    document.getElementById("result").innerHTML = "";
  }, 5000);

}

