function solve() {
    let myChatBox = document.getElementById("myChatBox");
    let myChatBoxSentButton = document.getElementsByName("myBtn")[0];

    let peshoChatBox = document.getElementById("peshoChatBox");
    let peshoChatBoxSentButton = document.getElementsByName("peshoBtn")[0];

    let chatChronologyDiv = document.getElementById("chatChronology");

    sendMsg(myChatBoxSentButton, myChatBox, chatChronologyDiv, "Me", "left");
    
    sendMsg(peshoChatBoxSentButton, peshoChatBox, chatChronologyDiv, "Pesho", "right");

    function sendMsg(chatBoxButton, chatBox, chatChronologyDiv, name, alignment) {

        chatBoxButton.addEventListener("click", () => {
            let div = document.createElement("div");

            let span = document.createElement("span");
            span.textContent = name;
            div.appendChild(span);

            let paragraph = document.createElement("p");
            paragraph.textContent = chatBox.value;

            div.appendChild(paragraph);

            div.style.textAlign = alignment;

            chatBox.value = "";

            chatChronologyDiv.appendChild(div);
        });
    }
}