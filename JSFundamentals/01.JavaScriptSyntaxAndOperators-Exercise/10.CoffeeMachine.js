function solve(input) {
    let cofeeCaffeinePrice = 0.80;
    let coffeeDecafPrice = 0.90;
    let teaPrice = 0.80;
    let sugarPrice = 0.10;

    let income = 0;

    debugger
    input.forEach(order => {
        let tokens = order.split(", ");

        let budget = tokens[0];
        let product = tokens[1];

        let sugarCount;

        let totalPrice = 0;

        if (product == "coffee") {
            let caffOrDeCaff = tokens[2];

            if (caffOrDeCaff == "caffeine") totalPrice += cofeeCaffeinePrice;

            if (caffOrDeCaff == "decaf") totalPrice += coffeeDecafPrice;

            if (tokens[3] == "milk") {
                let milk = tokens[3];
                
                totalPrice += GetMilkPrice(totalPrice);

                sugarCount = tokens[4];
            }
            else {
                sugarCount = tokens[3];
            }

        }
        else if (product == "tea") {
            totalPrice += teaPrice;

            if (tokens[2] == "milk") {
                totalPrice += GetMilkPrice(totalPrice);
                
                sugarCount = tokens[3];
            }
            else {
                sugarCount = tokens[2];
            }
        }
        if (sugarCount > 0) totalPrice += 0.10;

        if (budget < totalPrice) {
            console.log(`Not enough money for ${product}. Need ${(totalPrice - budget).toFixed(2)}$ more.`)
        }
        else {
            console.log(`You ordered ${product}. Price: ${totalPrice.toFixed(2)}$ Change: ${(budget - totalPrice).toFixed(2)}$`)

            income += totalPrice;
        }
    });

    console.log(`Income Report: ${income.toFixed(2)}$`);

    function GetMilkPrice(product) {
        let milkPrice = Math.ceil(product * 0.10) / 10;

        return sugarPrice
    }
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
)

solve(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']
)