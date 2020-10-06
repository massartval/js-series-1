// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {
    // your code here
    let n = Number(document.getElementById("number").value);
    /**
     * Returns the factorial of a given number
     * @param {number} n The number to factor
     */
    function factorial(n) {
      let acc = 1;
      if (n === 0) {
        return acc;
      } else if (n > 0) {
        acc = n * factorial(n - 1);
        return acc;
      } else {
        acc = "impossible to calculate";
        return acc;
      }
    }
    alert(`The factorial of ${n} is ${factorial(n)}`);
  });
})();
