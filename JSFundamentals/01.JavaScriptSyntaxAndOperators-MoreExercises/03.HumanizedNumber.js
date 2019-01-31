function solve(input) {
    let split = input.split(/[ ,.]/);
    debugger
    let array = [];
    for (let i = 0; i < split.length; i++) {
        if (!isNaN(split[i]) && split[i]) {
            array.push(split[i])
        }
    }
    array.forEach(element => {
        if (element.endsWith(1)) {
            console.log(`${element}st`);
        }
        else if(element.endsWith(2)){
            console.log(`${element}nd`);
        }
        else if(element.endsWith(3)){
            console.log(`${element}rd`);
        }else{
            console.log(`${element}th`)
        }
    });
}

solve('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.')