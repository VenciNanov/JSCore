function solve(array) {
    let pattern = new RegExp(/[a-zA-Z0-9_]+/, "g");

    let obj = {};

    for (let i = 0; i < array.length; i++) {
        let matches = array[i].match(pattern);
        Array.from(matches).forEach((word) => {
            if (obj[word] === undefined) {
                obj[word] = 1;
            }
            else {
                obj[word]++;
            }
        })
    }

    console.log(JSON.stringify(obj));
}

solve(["Far too slow, you're far too slow."])