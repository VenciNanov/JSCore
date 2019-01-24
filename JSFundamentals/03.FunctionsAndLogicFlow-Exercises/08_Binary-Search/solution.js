function binarySearch() {
    let inputArray = document.getElementById("arr").value;
    let numberToFind = document.getElementById("num").value;

    let result = document.getElementById("result");

    let array = inputArray.split(", ");

    if (array.includes(numberToFind)) {

        let indexOfNumber = array.indexOf(numberToFind);
        result.innerHTML = `Found ${numberToFind} at index ${indexOfNumber}`;
    }
    else {
        result.innerHTML = `${numberToFind} is not in the array`;
    }
}