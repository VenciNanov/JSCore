function solve() {
    let buttons = document.querySelectorAll("button");

    let submitBtn = buttons[0];
    let searchBtn = buttons[1];

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        let textInputs = document.querySelectorAll("input[type=text]");
        let passwordInput = document.querySelector("input[type=password]");

        let checkBoxes = document.querySelectorAll(".topics > input[type=checkbox]");

        let usernameTable = document.createElement("td");
        let emailTable = document.createElement("td");
        let topicTable = document.createElement("td");

        usernameTable.textContent = textInputs[0].value;
        emailTable.textContent = textInputs[1].value;
        topicTable.textContent = Array.from(checkBoxes).map((e) => {
            if (e.checked) {
                return e.value;
            }
        }).filter(x => x).join(" ");

        let tableRow = document.createElement("tr");
        tableRow.appendChild(usernameTable);
        tableRow.appendChild(emailTable);
        tableRow.appendChild(topicTable);

        let tableBody = document.querySelector("tbody");
        tableBody.appendChild(tableRow);
    })

    searchBtn.addEventListener("click", () => {
        let tableBody = document.querySelector("tbody");
        let textInputs = document.querySelectorAll("input[type=text]");
        let searchInput = textInputs[2];

        Array.from(tableBody.children).forEach((x) => {
            let isValid = Array.from(x.children).some((td) => {
                return td.textContent.includes(searchInput.value);
            });

            if (isValid === false) {
                x.style.visibility = "hidden"
            } else {
                x.style.visibility = "visible";
            }
        });
    });

}