function solve() {
    let buttons = document.getElementsByClassName("seat");

    let obj = {
        "Levski": {
            "A": 10,
            "B": 7,
            "C": 5
        },
        "Litex": {
            "A": 10,
            "B": 7,
            "C": 5
        },
        "VIP": {
            "A": 25,
            "B": 15,
            "C": 10
        },
        "_summary__": {
            "fans": 0,
            'totalProfit': 0
        }
    };

    let textArea = document.getElementById("output");

    Array.from(buttons).forEach((btn) => {
        btn.addEventListener("click", clickEvent)
    });

    let summaryBtn = document.getElementById("summary").children[0];
    summaryBtn.addEventListener("click", summary);

    function clickEvent(e) {
        let seat = e.target;
        let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = String.fromCharCode(65 + e.target.parentNode.cellIndex);



        if (e.target.style.backgroundColor === "") {
            e.target.style.backgroundColor = "rgb(255,0,0)";
            obj._summary__.fans += 1;
            obj._summary__.totalProfit += obj[zone][sector];
            textArea.value += ` Seat ${e.target.textContent} in zone ${zone} sector ${sector} was taken.\n`
        }
        else {
            textArea.value += ` Seat ${e.target.textContent} in zone ${zone} sector ${sector} is unavailable.\n`
        }
    }
    function summary() {
        let summarySpan = document.getElementById("summary").children[1];
        summarySpan.textContent=`${obj._summary__.totalProfit.toString()} leva, ${obj._summary__.fans.toString()} fans.`
    }
}