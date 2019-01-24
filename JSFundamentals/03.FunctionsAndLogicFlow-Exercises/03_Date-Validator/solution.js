(function () {
    let isYearValid = false;
    let isMonthValid = false;
    let isDayValid = false;

    let outputDiv = document.getElementById("output");

    let btn = document.getElementsByTagName("button")[0];

    btn.addEventListener("click", isInputValid);

    function isInputValid() {
        let year = document.getElementById("year").value;
        let month = document.getElementById("month").value;
        let day = document.getElementById("day").value;

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


        if (year > 0 && year <= 9999) {
            isYearValid = true;
        }
        if (months.includes(month)) {
            isMonthValid = true;


            if (((+year % 4 == 0) && (+year % 100 != 0)) || (+year % 400 == 0) && month == "February") {
                if (+day > 0 && +day < 30) {
                    isDayValid = true;
                }
            }
            switch (month) {
                case "April": case "July": case "September": case "November":case "August":
                    if (day > 0 && day < 31) {
                        isDayValid = true;
                    }
                    break;
                case "January": case "March": case "May": case "June":  case "October": case "December":
                    if (day > 0 && day < 32) {
                        isDayValid = true;
                    }
                    break;
            }
            
            month = months.indexOf(month) + 1;
            month = ("0" + month).slice(-2);
        }       

        day=("0"+day).slice(-2);

        if(isDayValid&&isMonthValid&&isYearValid){
            let p = document.createElement("p");
            p.textContent=`Date: ${year}-${month}-${day} is valid`;
            outputDiv.appendChild(p);
        }
        else{
            let p = document.createElement("p");
            p.textContent=`Date: ${year}-${month}-${day} is not valid`;
            outputDiv.appendChild(p);
        }
        isMonthValid=false;
        isYearValid=false;
        isDayValid=false;

        year=document.getElementById('year').value = '';
        month=document.getElementById('month').value = '';
        day=document.getElementById('day').value = '';
    
    }
})();