function solve(array) {

    console.log(isMatrixMagic(array))

    function isMatrixMagic(matrix) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            let rowSum = 0;
            for (let j = 0; j < matrix[i].length; j++) {
                rowSum += +matrix[i][j];
            }

            if (sum !== 0 && rowSum !== sum) return false;
            sum = rowSum;
        }

        for (let i = 0; i < matrix.length; i++) {
            let colSum = 0;
            for (let j = 0; j < matrix.length; j++) {
                colSum += +matrix[j][i];
            }

            if (sum != colSum) return false;
        }

        return true;

    }
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )