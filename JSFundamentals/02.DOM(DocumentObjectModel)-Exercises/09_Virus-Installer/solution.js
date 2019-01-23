function solve() {
    let btns = document.getElementsByTagName("button");

    let nextButton = btns[0];
    let cancelButton = btns[1];

    let stepsCounter = 0;

    let firstStep = document.getElementById("firstStep");
    let secondStep = document.getElementById("secondStep");
    let thirdStep = document.getElementById("thirdStep");

    let radios = document.getElementsByTagName("input");

    let agreeRadio = radios[0];
    let disagreeRadio = radios[1];


    nextButton.addEventListener("click", () => {
        if (stepsCounter === 0) {
            let startImage = document.getElementById("content");

            startImage.style.backgroundImage = "none";
            firstStep.style.display = "block";
            stepsCounter++;
            //
            agreeRadio.addEventListener("click", () => {
                disagreeRadio.removeAttribute("checked");
                agreeRadio.setAttribute("checked", "");
            });

            disagreeRadio.addEventListener("click", () => {
                agreeRadio.removeAttribute("checked");
                disagreeRadio.setAttribute("checked", "");
            });
            //
        } else if (stepsCounter === 1 && agreeRadio.checked == true) {

            firstStep.style.display = "none";
            secondStep.style.display = "block";
            nextButton.style.display = "none"

            setTimeout(() => {
                nextButton.style.display = "inline";
            }, 3000);

            stepsCounter++;
            // nextButton.style.display = "inline";
        } else if (stepsCounter == 2) {

            secondStep.style.display = "none";
            thirdStep.style.display = "block";
            nextButton.style.display = "none";
            cancelButton.textContent = "Finish";
        }
    });

    cancelButton.addEventListener("click", () => {
        let exerciseSection = document.getElementById("exercise");

        let exerciseChild = exerciseSection.children;

        for (let i = 0; i < exerciseChild.length; i++) {
            let element = exerciseChild[i];

            element.style.display="none";
            
        }

       // exerciseSection.style.display="none";
  
    });


}