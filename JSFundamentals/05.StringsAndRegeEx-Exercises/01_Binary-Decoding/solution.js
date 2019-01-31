function solve() {
  let input = document.getElementById('str').value;
  let sum = input.split('').filter(x => x == '1').reduce((a, b) => +a + +b);

  while (sum > 9) {
    sum = +(String(sum).split('').reduce((a, b) => +a + +b));
  }

  let binaryMsg = input.substr(sum).slice(0, -sum);

  let binaryArr = [];
  for (let i = 0; i < binaryMsg.length / 8; i++) {
    binaryArr.push(binaryMsg.substr(i * 8, 8))
  }

  let printStr = binaryArr.map(el => parseInt(el, 2)).map(el => String.fromCharCode(el)).join('');

  let result = document.getElementById('result');
  result.textContent = printStr.replace(/[^A-Za-z   ]/g, "");

}