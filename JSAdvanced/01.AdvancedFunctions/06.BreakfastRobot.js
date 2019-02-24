function solve() {
    let macros = { 'protein': 0, 'carbohydrate': 0, 'fat': 0, 'flavour': 0 };

    let carbohydratesError = 'Error: not enough carbohydrate in stock';
    let flavoursError = 'Error: not enough flavours in stock';
    let fatError = 'Error: not enough fat in stock';
    let proteinError = 'Error: not enough carbohydrate in stock';

    function manageRobot() {
        let split = arguments[0].split(' ');
        let command = split[0];

        if (command === 'restock') {
            let macro = split[1];
            let value = parseFloat(split[2]);

            macros[macro] += value;
            return ('Success');
        } else if (command === 'prepare') {
            let food = split[1];
            let quantity = parseInt(split[2]);

            switch (food) {
                case 'apple': {
                    if (macros.carbohydrate < (1 * quantity)) {
                        return carbohydratesError;
                    } else if (macros.flavour < (2 * quantity)) {
                        return flavoursError;
                    } else {
                        macros.carbohydrate -= (1 * quantity);
                        macros.flavour -= (2 * quantity);
                        return 'Success';
                    }
                }
                    break;

                case 'coke': {
                    if (macros.carbohydrate < (10 * quantity)) {
                        return carbohydratesError;
                    } else if (macros.flavour < (20 * quantity)) {
                        return flavoursError;
                    } else {
                        macros.carbohydrate -= (10 * quantity);
                        macros.flavour -= (20 * quantity);
                        return 'Success';
                    }
                }
                    break;

                case 'burger': {
                    if (macros.carbohydrate < (5 * quantity)) {
                        return carbohydratesError;
                    } else if (macros.fat < (7 * quantity)) {
                        return fatError;
                    } else if (macros.flavour < (3 * quantity)) {
                        return flavoursError;
                    } else {
                        macros.carbohydrate -= (5 * quantity);
                        macros.fat -= (7 * quantity);
                        macros.flavour -= (3 * quantity);
                        return 'Success';
                    }
                } break;

                
                case 'omlet': {
                    if (macros.protein < (5 * quantity)) {
                        return carbohydratesError;
                    } else if (macros.fat < (1 * quantity)) {
                        return fatError;
                    } else if (macros.flavour < (1 * quantity)) {
                        return flavoursError;
                    } else {
                        macros.protein -= (5 * quantity);
                        macros.fat -= (1 * quantity);
                        macros.flavour -= (1 * quantity);
                        return 'Success';
                    }
                } break;

                

                case 'cheverme': {
                    if (macros.protein < (10 * quantity)) {
                        return carbohydratesError;
                    } else if (macros.carbohydrate < (10 * quantity)) {
                        return fatError;
                    } else if (macros.fat < (10 * quantity)) {
                        return flavoursError;
                    } else if (macros.flavour < (10 * quantity)) {
                        return proteinError;
                    } else {
                        macros.carbohydrate -= (10 * quantity);
                        macros.fat -= (10 * quantity);
                        macros.flavour -= (10 * quantity);
                        macros.protein-=(10*quantity);
                        return 'Success';
                    }
                }
                break;
            }
        }else{
            let report = `protein=${macros.protein.toString()} carbohydrate=${macros.carbohydrate.toString()} fat=${macros.fat} flavour=${macros.flavour}`
            return report;
        }
        
        return manageRobot;

    }

    return manageRobot;
}