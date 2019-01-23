function solve() {
	let searchArea = document.querySelector("input");

	let btn = document.querySelector("button");


	btn.addEventListener("click", () => {

		let numbersFromField = searchArea.value.split(" ");

		let numbers = [];
		numbersFromField.forEach((number) => {
			numbers.push(+number);
		})
		numbers.sort((a, b) => a - b);
		let resultNumbers = numbers.filter(a => +a < 49);

		if (numbers.length == resultNumbers.length && resultNumbers.length === 6) {

			let numberCounter = 0;

			let allNumbersArea = document.getElementById("allNumbers")

			for (let i = 1; i <= 49; i++) {
				let numberDiv = document.createElement("div");
				numberDiv.classList.add("numbers")
				numberDiv.textContent = i;
				if (resultNumbers.includes(i)) {
					numberDiv.style.backgroundColor = "orange";
				}
				allNumbersArea.appendChild(numberDiv);

				searchArea.disabled = true;
				btn.disabled = true;
			}
		}
	})
}