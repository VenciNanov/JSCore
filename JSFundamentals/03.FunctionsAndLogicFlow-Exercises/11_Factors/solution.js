function solve() {
   let number = document.getElementById("num").value;

   let result = document.getElementById("result");

   let factorSeq = "";
   factor(number);
   result.innerHTML = factorSeq.trim();

   function factor(num) {
      for (let i = 1; i <= num; i++) {
         if (num % i == 0) {
            factorSeq += " " + i;
         }
      }
   }

}