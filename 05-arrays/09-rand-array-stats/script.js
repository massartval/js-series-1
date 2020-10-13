// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    // Array
    let array = [];
    for (i = 1; i <= 10; i++) {
      let n = Math.floor(Math.random() * 10);
      document.getElementById(`n-${i}`).innerHTML = n;
      array.push(n);
    }
    // Smallest number
    document.getElementById(`min`).innerHTML = Math.min(...array);
    // Largest number
    document.getElementById(`max`).innerHTML = Math.max(...array);
    // Sum
    let sum = array.reduce(function (a, b) {
      return a + b;
    }, 0);
    document.getElementById(`sum`).innerHTML = sum;
    // Average
    document.getElementById(`average`).innerHTML = sum / array.length;
  });
})();
