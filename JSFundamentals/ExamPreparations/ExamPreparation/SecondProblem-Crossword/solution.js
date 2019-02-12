function solve() {
   //let input = document.getElementById("input").value;
   let output = document.querySelector("#output p");

   document.querySelector("#filter button").addEventListener("click", filter);
   document.querySelector("#sort button").addEventListener("click", sort);
   document.querySelector("#rotate button").addEventListener("click", rotate);
   document.querySelector("#get button").addEventListener("click", get);

   function filter(e) {
      let filterPosition = document.getElementById('filterPosition').value;
      let secondaryCommand = Array.from(document.getElementById('filterSecondaryCmd').children).filter(x => x.selected)[0].value;

      let input = document.getElementById('input').value;

      if (secondaryCommand === 'uppercase') {
         output.textContent += input.split('').filter(x => x === x.toUpperCase())[filterPosition - 1];
      } else if (secondaryCommand === 'lowercase') {
         output.textContent += input.split('').filter(x => x === x.toLowerCase())[filterPosition - 1];
      } else if (secondaryCommand === 'nums') {
         output.textContent += input.split('').filter(x => !isNaN(x))[filterPosition - 1];
      }
   }

   function sort(e) {
      let sortPosition = document.getElementById("sortPosition").value;
      let secondaryCmd = Array.from(document.getElementById("sortSecondaryCmd").children).filter(x => x.selected)[0].value;

      let input = document.getElementById("input").value;

      if (secondaryCmd === "A") {
         output.textContent += input.split("").sort()[sortPosition - 1];
      } else if (secondaryCmd === "Z") {
         output.textContent += input.split("").sort().reverse()[sortPosition - 1];
      }
   }

   function rotate(e) {
      let rotatePosition = document.getElementById('rotatePosition').value;
      let secondaryCommand = document.getElementById('rotateSecondaryCmd').value;

      let input = document.getElementById('input').value.split("");

      for (let i = 0; i < secondaryCommand; i++) {
         let lastEl = input.pop();
         input.unshift(lastEl);
      }
      output.textContent += input[rotatePosition - 1];

   }

   function get(e) {
      let getPosition = document.getElementById('getPosition').value;

      let input = document.getElementById('input').value.split("");

      output.textContent += input[getPosition - 1];
   }
}