function solve(array) {
    array.sort(function (a, b) {
        if ((a.length - b.length) !== 0) {
            return a.length - b.length;
        } else {
            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        }
    });

    console.log(array.join("\n"));
}

solve(['alpha', 
'beta', 
'gamma']
)