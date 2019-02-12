function solve() {
    let buttons = document.querySelectorAll("button");

    let milkButton = buttons[0];
    let breadButton = buttons[1];
    let tomatoesButton = buttons[2];
    let buyBtn = buttons[3];

    let textArea = document.querySelector("textarea");

    let obj = {};
    let sum = 0;

    milkButton.addEventListener("click", () => {
        if (obj["Milk"] === undefined) {
            obj["Milk"] = 1.09;
        }
        else {
            obj["Milk"] += 1.09;
        }
        sum += 1.09;
        textArea.textContent += `Added Milk for 1.09 to the cart.\n`;
    });

    breadButton.addEventListener("click", () => {
        if (obj["Bread"] === undefined) {
            obj["Bread"] = 0.80;
        }
        else {
            obj["Bread"] += 0.80;
        }
        sum += 0.80;
        textArea.textContent += `Added Bread for 0.80 to the cart.\n`;
    });

    tomatoesButton.addEventListener("click", () => {
        if (obj["Tomatoes"] === undefined) {
            obj["Tomatoes"] = 0.99;
        }
        else {
            obj["Tomatoes"] += 0.99;
        }
        sum += 0.99;
        textArea.textContent += `Added Tomatoes for 0.99 to the cart.\n`;
    });

    buyBtn.addEventListener("click", () => {
        let boughtProducts = Object.keys(obj).map((key) => { return key; })
        textArea.textContent += `You bought ${boughtProducts.join(", ")} for ${sum.toFixed(2)}.\n`;
    })

}