function solve(arrayOne, arrayTwo, arrayThree) {
    let resultArray = arrayOne.filter(value => -1 !== arrayTwo.indexOf(value));
    resultArray = resultArray.filter(value => -1 !== arrayThree.indexOf(value));
    let average = 0;
    for (let i = 0; i < resultArray.length; i++) {
        average += resultArray[i];
    }
    //Median
    let medianArray = resultArray.sort((a,b)=>a-b);
    let lowMiddle = Math.floor((medianArray.length-1)/2);
    let highMiddle = Math.ceil((medianArray.length-1)/2);
    let median=(medianArray[lowMiddle]+medianArray[highMiddle])/2;
    
    resultArray.sort();

    console.log(`The common elements are ${resultArray.join(", ")}.`);
    console.log(`Average: ${average / resultArray.length}.`)
    console.log(`Median: ${median}.`)
}

solve([1, 2, 3, 4, 5],
    [3, 2, 1, 5, 8],
    [2, 5, 3, 1, 16]
    
);