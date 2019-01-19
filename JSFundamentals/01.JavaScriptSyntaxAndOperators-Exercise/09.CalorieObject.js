function solve(array) {
    debugger
    let result = "{";

    for (let i = 0; i < array.length; i++) {

        if (i % 2 === 0) result += " " + array[i] + ": ";

        else {
            result += array[i];
            if (i+1 < array.length) result += ","
        }
    }
    result += " }"
    console.log(result);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);