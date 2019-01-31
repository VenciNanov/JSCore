function solve(input) {
    let rotateCount = +input.pop();
    if (rotateCount % input.length === 0) {
        console.log(input.join(" "));
        return;
    }
    while (rotateCount > 0) {
        input.unshift(input.pop());

        rotateCount--;
    }

    console.log(input.join(' '));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']
)