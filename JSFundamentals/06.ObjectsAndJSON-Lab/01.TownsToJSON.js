function solve(inputArr) {
    let cols = inputArr.shift();

    inputArr;

    let output = [];
    for (let i = 0; i < inputArr.length; i++) {
        let split = inputArr[i].split("|")
        debugger
        let obj = { "Town": `${split[1].trim()}`, "Latitude": +split[2].trim(), "Longitude": +split[3].trim() }
        output.push(obj);
    }

    console.log(JSON.stringify(output));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)