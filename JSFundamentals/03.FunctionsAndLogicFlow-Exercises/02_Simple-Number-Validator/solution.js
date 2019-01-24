(function () {
    function Solve() {
        
        let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];

        let responseSpan = document.getElementById("response");

        let button = document.querySelector("button");

        button.addEventListener("click", () => {
            let numbers = document.querySelector("input").value.toString();

            let validatedCounter = 0;
            let sum = 0;

            function Sum() {
                for (let i = 0; i < numbers.length; i++) {
                    if (+numbers[i] < 0 || +numbers[i] > 9) validatedCounter++;

                    if (i + 1 === 10) break;
                    else sum += (+numbers[i] * weightPosition[i]);
                }
            }

            Sum();

            let remainder = sum % 11;
            if (remainder % 10 === 0) {
                remainder = 0;
            }

            if (+remainder === +numbers[9] && validatedCounter === 0) {
                responseSpan.innerHTML = "This number is Valid!";
            } else {
                responseSpan.innerHTML = "This number is NOT Valid!";
            }
        })
    }
    return function(){
        Solve();
    }

})();