function solve(input) {
    input = input.toString();
    
    let result = true;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {

        sum += Number(input[i]);

        if (input[i] != input[i + 1] && input[i + 1] != undefined) {
            result = false;
           
        }
    }

    console.log(result);
    console.log(sum);
}

solve(123)