(function () {

    let buttons = document.querySelectorAll("button");

    let chopBtn = buttons[0];
    let diceBtn = buttons[1];
    let spiceBtn = buttons[2];
    let bakeBtn = buttons[3];
    let filletBtn = buttons[4];

    let result = 0;
    let originalNumber = 0;
    let number = 0;

    chopBtn.addEventListener("click", () => {
        let input = +document.querySelector("input").value;

        if (input != originalNumber) {
            originalNumber = input;
            number = input;
        }
        number /= 2;

        appendNumber(number);
    })

    diceBtn.addEventListener("click", () => {
        let input = +document.querySelector("input").value;

        if (input != originalNumber) {
            originalNumber = input;
            number = input;
        }

        number = Math.sqrt(number);
        appendNumber(number);
    });

    spiceBtn.addEventListener("click", () => {
        let input = +document.querySelector("input").value;

        if (input != originalNumber) {
            originalNumber = input;
            number = input;
        }

        number += 1;
        appendNumber(number);
    })

    bakeBtn.addEventListener("click", () => {
        let input = +document.querySelector("input").value;

        if (input != originalNumber) {
            originalNumber = input;
            number = input;
        }

        number *= 3;
        appendNumber(number);
    })

    filletBtn.addEventListener("click", () => {
        let input= +document.querySelector("input").value;

        if (input != originalNumber) {
            originalNumber = input;
            number = input;
        }

        number = number * 0.80;
        appendNumber(number);
    })


    function appendNumber(number) {
        let output = document.getElementById("output");
        output.innerHTML = number;
    }
})();

