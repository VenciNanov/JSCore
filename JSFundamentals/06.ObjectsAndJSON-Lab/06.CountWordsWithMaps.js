 function solve(array) {
    let pattern = new RegExp(/[a-zA-Z0-9_]+/, "g");

    let obj = {};

    for (let i = 0; i < array.length; i++) {
        let matches = array[i].match(pattern);
        Array.from(matches).forEach((word) => {
            if (obj[word.toLowerCase()] === undefined) {
                obj[word.toLowerCase()] = 1;
            }
            else {
                obj[word.toLowerCase()]++;
            }
        })
    }

    Object.keys(obj).sort().forEach((word) => {
        console.log(`'${word}' -> ${obj[word]} times`)
    })
}

solve(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"])