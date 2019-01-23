function solve() {
	let exerciseDiv = document.getElementById("exercise");

	let messageDiv = exerciseDiv.querySelector("div");

	//	let messageText = messageDiv.querySelector("textarea").value;
	let encodeAndSendButton = messageDiv.querySelector("button");

	let decodeMessageDiv = exerciseDiv.querySelectorAll("div")[1];
	let decodeAreaText = decodeMessageDiv.querySelector("textarea");
	let decocdeAndReadButton = decodeMessageDiv.querySelector("button");

	
	decocdeAndReadButton.addEventListener("click", () => {
		let decodedMessage = "";
		
		let message = decodeAreaText.value;

		for (let index = 0; index < message.length; index++) {
			const element = message[index];
			decodedMessage+=String.fromCharCode(message.charCodeAt(index)-1);
		}

		decodeAreaText.value=decodedMessage;
	 
	});

	encodeAndSendButton.addEventListener("click", () => {
		let encodedMessage = "";

		let messageText = messageDiv.querySelector("textarea");

		let message = messageText.value;
		for (let index = 0; index < message.length; index++) {
			const element = message[index];
			encodedMessage += String.fromCharCode(message.charCodeAt(index) + 1);
		}
		messageText.value = "";
		decodeAreaText.value = encodedMessage;
	});

}