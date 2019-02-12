function solve() {

    let btn = document.querySelector("button");

    btn.addEventListener("click", () => {
        let input = document.getElementById("input").value;
        let output = document.getElementById("output");

        let numberOfCharacters = Number(input.match(/[0-9]+/)[0]);

        let numberOfCharacterLength = numberOfCharacters.toString().length;

        input = input.split('').slice(numberOfCharacterLength).slice(0, numberOfCharacters);

        let separator = input.pop();
        input = input.join("").split(separator);

        let regex = new RegExp(`[${input[0]}]+`, "g");
        
        let result = input[1].split(regex).join("").split("#").join(" ");
        output.value = result;
        console.log(input)

    })
}