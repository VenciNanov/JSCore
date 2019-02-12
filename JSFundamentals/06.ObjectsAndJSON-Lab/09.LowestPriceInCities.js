function solve(input) {
    let obj = {};

    Array.from(input).forEach((token) => {
        let split = token.split(" | ");

        let town = split[0];
        let product = split[1];
        let price = parseFloat(split[2]);

        if (obj[product] === undefined) {
            obj[product] = { [price]: [town] };
        } else if (parseFloat(Object.keys(obj[product])[0]) > price) {
            obj[product] = { [price]: [town] };
        }
    });

    Object.keys(obj).forEach((key) => {
        Object.keys(obj[key]).forEach((value)=>console.log(`${key} -> ${Object.keys(obj[key])[0].toString()} (${obj[key][value]})`));
    })
}