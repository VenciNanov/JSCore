function solve() {
    let numberField = document.getElementById("input");
    let toNumberSelect = document.getElementById("selectMenuTo");

    let resultField = document.getElementById("result");

    let convert  = document.querySelector("button");

    let toEmpty = toNumberSelect.querySelector("option");

    let binaryElement = document.createElement("option");
    binaryElement.value="binary";
    binaryElement.textContent="Binary";
    toNumberSelect.appendChild(binaryElement);

    let hexaDec = document.createElement("option");
    hexaDec.value="hexadecimal"
    hexaDec.textContent="Hexadecimal";
    toNumberSelect.appendChild(hexaDec);

    
    convert.addEventListener("click",()=>{
        if(document.getElementById("selectMenuTo").value==toEmpty.value){
            toEmpty.setAttribute("selected","");
            binaryElement.removeAttribute("selected");
            hexaDec.removeAttribute("selected");
        }
        if(document.getElementById("selectMenuTo").value==binaryElement.value){
            toEmpty.removeAttribute("selected");
            binaryElement.setAttribute("selected","");
            hexaDec.removeAttribute("selected");
        }
        if(document.getElementById("selectMenuTo").value==hexaDec.value){
            toEmpty.removeAttribute("selected");
            binaryElement.removeAttribute("selected");
            hexaDec.setAttribute("selected","");
        }
    });
        
    convert.addEventListener("click",()=>{
        if(binaryElement.hasAttribute("selected")==true){
            let decimalNumber = Number(numberField.value);
            resultField.value=decimalNumber.toString(2);
        }
        if(hexaDec.hasAttribute("selected")==true){
            let decimalNumber = Number(numberField.value);
            resultField.value=decimalNumber.toString(16).toUpperCase();
        }
    });

}