function greatestCD() {

   let btn = document.querySelector("button");

   let output = document.getElementById("result");


   let firstNumber = document.getElementById("num1");
   let secondNumber = document.getElementById("num2");


   let result = gcd(+firstNumber.value, +secondNumber.value);

   output.innerHTML = result;

   function gcd(a, b) {
      if (a == 0)
         return b;

      while (b != 0) {
         if (a > b)
            a = a - b;
         else
            b = b - a;
      }

      return a;
   }


}