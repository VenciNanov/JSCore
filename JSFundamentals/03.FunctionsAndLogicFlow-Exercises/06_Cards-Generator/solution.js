(function () {
    let btn = document.querySelector("button");

    btn.addEventListener("click", () => {
        let fromCardInput = document.getElementById("from").value;
        let toCardInput = document.getElementById("to").value;
        let suitInput = document.querySelector("select").value;

        let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

        let fromCard = cards.indexOf(fromCardInput);
        let toCard = cards.indexOf(toCardInput);

        let suits = ["&hearts;", "&spades", "&diamons", "&clubs"];
        let suit = getSuit(suitInput);

        let output = document.getElementById("cards");

        if (fromCard < toCard) {

            let cycleLength = toCard - fromCard;

            for (let i = fromCard; i <= toCard; i++) {
                let card = cards[i];

                appendCard(card, suit);

            }
        }
        if (toCard <= fromCard) {
            for (let i = toCard; i <= fromCard; i++) {
                let card = cards[i];
                appendCard(card, suit);

            }
        }

        document.getElementById("from").value = "";
        document.getElementById("to").value = "";
        

        function appendCard(card, suit) {
            let cardElement = document.createElement("div");
            cardElement.classList.add("card");

            let cardFirstP = document.createElement("p");
            let cardSecondP = document.createElement("p");
            let cardThirdP = document.createElement("p");

            cardFirstP.innerHTML = suit;
            cardSecondP.innerHTML = card;
            cardThirdP.innerHTML = suit;

            cardElement.appendChild(cardFirstP);
            cardElement.appendChild(cardSecondP);
            cardElement.appendChild(cardThirdP);

            output.appendChild(cardElement);
        }

        function getSuit(suitInput) {
            let suit = "";
            if (suitInput.startsWith("Hearts")) suit = "&hearts;";
            if (suitInput.startsWith("Spades")) suit = "&spades;";
            if (suitInput.startsWith("Diamonds")) suit = "&diamond;";
            if (suitInput.startsWith("Clubs")) suit = "&clubs;";

            return suit;
        }
    })
})();