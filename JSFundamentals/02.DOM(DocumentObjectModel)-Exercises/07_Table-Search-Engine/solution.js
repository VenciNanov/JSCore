function solve() {
    let tableRows = document.querySelector("tbody").getElementsByTagName("tr");

    let searchField = document.getElementById("searchField");

    let searchButton = document.getElementById("searchBtn");


    searchButton.addEventListener("click", () => {
        for (let row of tableRows) {

            if (row.textContent.toLowerCase().includes(searchField.value.toLowerCase()) && searchField.value != "") {
                row.classList.add("select");
            }
            else{
                row.classList.remove("select")
            }

        }
        searchField.value = "";

    })

    console.log(tableRows[0].textContent)
}