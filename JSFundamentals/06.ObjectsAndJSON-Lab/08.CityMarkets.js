function solve(input) {
    let obj = {};

    Array.from(input).forEach((line) => {
        let split = line.split(/ -> | : /);

        let town = split[0];
        let product = split[1];
        let salesCount = parseFloat(split[2]);
        let pricePerUnit = parseFloat(split[3]);
        let total = salesCount * pricePerUnit;

        if (obj[town] === undefined) {
            obj[town] = [];
        }

        obj[town].push(`$$$${product.toString()} : ${total}`);
    });

    Object.keys(obj).forEach((key) => {
        console.log(`Town - ${key}`);
        Array.from(obj[key]).forEach((element)=>console.log(element));
    })
}