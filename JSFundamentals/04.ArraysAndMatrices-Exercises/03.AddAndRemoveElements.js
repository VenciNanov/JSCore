function solve(input) {
    let number = 0;
    let array = [];
    debugger
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "add") {
            number++;
            array.push(number);
        }
        else if (input[i] == "remove") {
            number++
            array.pop();
        }
    }
    if (array.length > 0) {
        console.log(array.join("\n"))
    }
    else {
        console.log("Empty")
    }

}

solve(['remove',
    'remove',
    'remove']
)