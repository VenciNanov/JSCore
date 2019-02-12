function solve(matrixInput, commandArgs) {
    let headerRow = matrixInput[0];
    let tableRows = [];
    Array.from(matrixInput).forEach((x, index) => {
        tableRows.push(x);
    })

    let split = commandArgs.split(" ");
    let command = split[0];
    let header = split[1];
    switch (command) {
        case "hide":
            hideCmd();
            break;
        case "sort":
            sortCmd();
            break;
        case "filter":

            filterCmd();
            break;
    }

    function hideCmd() {
        let indexOfHeader = headerRow.indexOf(header);

        Array.from(tableRows).forEach(x => {
            x.splice(indexOfHeader, 1)
            // console.log(x)
        });
        tableRows.shift();
        printResult(tableRows)
    }
    function sortCmd() {
        debugger
        let indexOfHeader = headerRow.indexOf(header);

        tableRows.shift();
        tableRows.sort(function (a, b) {
            return a[indexOfHeader] > b[indexOfHeader] ? 1 : -1;
        });
        printResult(tableRows);
        //        console.log(tableRows)
    }
    function filterCmd() {
        let indexOfHeader = headerRow.indexOf(header);

        tableRows.shift();
        let value = split[2];
        let array = [];

        Array.from(tableRows).forEach(x => {
            if (x[indexOfHeader] == value) {
               // console.log(x);
                array.push(x);
            }
        });
        printResult(array);


    }

    function printResult(array) {
        console.log(headerRow.join(" | "))

        Array.from(array).forEach(x => {
            console.log(x.join(" | "))
        })
    }
}


// solve([['name', 'age', 'grade'],
// ['Peter', '25', '5.00'],
// ['George', '34', '6.00'],
// ['Marry', '28', '5.49']],
//     'hide name'
// )

solve([['firstName', 'age', 'grade', 'course'],
['Peter', '25', '5.00', 'JS-Core'],
['George', '34', '6.00', 'Tech'],
['Marry', '28', '5.49', 'Ruby']],
    'filter firstName Marry'
)