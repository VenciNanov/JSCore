function solve() {
	let firstMatrixInput = JSON.parse(document.getElementById("mat1").value);
	let secondMatrixInput = JSON.parse(document.getElementById("mat2").value);

	let result = dotProduct(firstMatrixInput, transponse(secondMatrixInput));

	let output = document.getElementById("result");
	for (let i = 0; i < result.length; i++) {
		let p = document.createElement("p");
		p.innerHTML = result[i].join(', ');
		output.appendChild(p);
	}

	

	function dotProduct(matrixOne, matrixTwo) {
		let result = [];
		for (let i = 0; i < matrixOne.length; i++) {
			result[i] = [];
			for (let j = 0; j < matrixTwo[0].length; j++) {
				let sum = 0;
				for (let k = 0; k < matrixOne[0].length; k++) {
					sum += matrixOne[i][k] * matrixTwo[k][j];
				}
				result[i][j] = sum;
			}
		}
		return result;
	}

	function transponse(matrix) {
		return matrix[0].map((col, i) => matrix.map(row => row[i]));
	}

}