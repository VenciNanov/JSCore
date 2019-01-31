function solve() {
  let input = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");

  let regex = /^[A-Z]{1}[a-z]* [A-Z]{1}[a-z]* (\+359-\d-\d{3}-\d{3}|\+359 \d \d{3} \d{3}) [a-z0-9]+@[a-z]+\.[a-z]{2,3}$/gm

  let nameRegex = /[A-Z]{1}[a-z]* [A-Z]{1}[a-z]*/gm;

  let phoneRegex = /(\+359-\d-\d{3}-\d{3}|\+359 \d \d{3} \d{3})/gm;
  let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gm;
  //let array = input.split(", ");

  for (let i = 0; i < input.length; i++) {
    if (regex.test(input[i])) {
      let name = input[i].match(nameRegex);
      let phone = input[i].match(phoneRegex);
      let email = input[i].match(emailRegex);

      let nameP = document.createElement("p");
      let phoneP = document.createElement("p");
      let emailP = document.createElement("p");

      nameP.innerHTML = `Name: ${name}`;
      phoneP.innerHTML = `Phone Number: ${phone}`;
      emailP.innerHTML = `Email: ${email}`;

      result.appendChild(nameP);
      result.appendChild(phoneP);
      result.appendChild(emailP);
    }
    else {
      let invalidP = document.createElement("p");
      invalidP.innerHTML = "Invalid data";
      result.appendChild(invalidP);
    }
    let separatorP = document.createElement("p");
    separatorP.innerHTML = "- - -";
    result.appendChild(separatorP);
  }
}