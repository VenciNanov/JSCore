function solve(fruit,weigth,pricePerKilo){
    weigth = Number(weigth)/1000;
    pricePerKilo= Number(pricePerKilo);

    let result = pricePerKilo*weigth;

    console.log(`I need ${result.toFixed(2)} leva to buy ${weigth.toFixed(2)} kilograms ${fruit}.`);

}

solve("fruit",2500,1.80)