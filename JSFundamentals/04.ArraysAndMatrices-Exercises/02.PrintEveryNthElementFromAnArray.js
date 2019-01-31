function solve(input) {
    let n = input[input.length - 1];
    input.pop();
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let element = input[i];

        if (i % n === 0) {
            console.log(element);
        }
    }
}

solve(['1', 
'2',
'3', 
'4', 
'5', 
'6']
)