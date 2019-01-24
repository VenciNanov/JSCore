(function () {

    let male = document.getElementById("male");
    let female = document.getElementById("female");

    male.addEventListener("click", () => {
        female.removeAttribute("checked");
        male.setAttribute("checked", "");
    });

    female.addEventListener("click", () => {
        male.removeAttribute("checked");
        female.setAttribute("checked", "");
    });

    let btn = document.querySelector("button");

    btn.addEventListener("click", getEGN)


    function getEGN() {
        let inputYear = document.getElementById("year").value;
        let monthInput = document.getElementById("month").value;
        let date = document.getElementById("date").value;
        let gender = getGender();
        let regionalCode = document.getElementById("region").value;

        let male = document.getElementById("male");
        let female = document.getElementById("female");

        let egn = "";
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        function getFirstTwoDigits(year) {
            return year.slice(-2);
        }
        function getMonthDigits(month) {
            //let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let returnMonth = months.indexOf(month) + 1;
            returnMonth = ("0" + returnMonth).slice(-2);
            return returnMonth
        }
        function getDateDigits(date) {
            return date = ("0" + date).slice(-2);
        }
        function getGender() {
            let male = document.getElementById("male");
            let female = document.getElementById("female");


            if (male.hasAttribute("checked")) {
                return "Male";
            }
            else {
                return "Female"
            }
        }
        function getRegionCode(regionalCode, gender) {
            if (regionalCode.length === 3) {
                if (gender == "Female") {
                    let lastNumber = regionalCode.charAt(regionalCode.length - 1);

                    if (lastNumber % 2 === 1 || lastNumber % 2 === 0) {
                        regionalCode = regionalCode.substring(0, regionalCode.length - 1);
                        return regionalCode = regionalCode + "1";
                    }
                    else {
                        return regionalCode
                    }
                }
                if (gender == "Male") {
                    let lastNumber = regionalCode.charAt(regionalCode.length - 1);

                    if (lastNumber % 2 === 0) {
                        regionalCode = regionalCode.substring(0, regionalCode.length - 1);
                        return regionalCode = regionalCode + "2";
                    }
                    else {
                        return regionalCode;
                    }
                }
            }
            else if (regionalCode.length === 2) {
                if (gender === "Female") {
                    return regionalCode += "1";
                }
                else if (gender === "Male") {
                    return regionalCode += "2";
                }
            }
            else {
                return regionalCode;
            }
        }
        function getLastDigit(numbers) {
            let weightNumbers = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            let weightSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                let number = Number(numbers[i]);
                let weightNumber = weightNumbers[i];

                weightSum += (number * weightNumber)
            }
            let result = weightSum % 11;

            if (result === 10) {
                return 0;
            }
            else return result;
        }
        if ((+inputYear >= 1900 && +inputYear <= 2100) && (+regionalCode >= 43 && +regionalCode <= 999) && gender != undefined && months.includes(monthInput) && date > 0 && date < 32 && (male.hasAttribute("checked") || female.hasAttribute("checked"))) {
            egn += getFirstTwoDigits(inputYear);
            egn += getMonthDigits(monthInput);
            egn += ("0" + date).slice(-2);
            egn += getRegionCode(regionalCode, gender);
            egn += getLastDigit(egn);

            let output = document.getElementById("egn");
            output.innerHTML = "Your EGN is: " + egn;
        }
        inputYear = document.getElementById("year").value = "";

        let monthSelectElementChildren = document.getElementById("month").children;

        monthInput = document.getElementById("month").value = monthSelectElementChildren[0].value;

        date = document.getElementById("date").value = "";


        male.checked = false;
        female.checked = false;
        male.removeAttribute("checked");
        female.removeAttribute("checked");

        gender = "";
        regionalCode = document.getElementById("region").value = "";

    }
})();