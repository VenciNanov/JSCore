(function () {
    function Solve() {
        let checkBtn = document.querySelector("button");

        function isYearLeap(year) {
            return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        }

        checkBtn.addEventListener("click", () => {
            let year = Number(document.querySelector("input").value);


            let resultDiv = document.getElementById("year").children;



            let isLeap = resultDiv[0];
            let resultYearDiv = resultDiv[1];

            if (isYearLeap(year)) {
                isLeap.innerHTML = "Leap Year";
            } else {
                isLeap.innerHTML = "Not Leap Year"
            }

            resultYearDiv.innerHTML = year;

            document.querySelector("input").value = ""
        })
    }
    return function(){
        Solve();
    }
})();