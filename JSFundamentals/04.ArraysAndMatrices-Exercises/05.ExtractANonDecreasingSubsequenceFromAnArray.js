function solve(input) {
    let maxNum = input[0];
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        if (number >= maxNum) {
            maxNum = number;
            result.push(number);
        }
    }

    console.log(result.join("\n"));
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )