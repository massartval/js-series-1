// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    function changeBgColor() {
      document.body.style.backgroundColor = document.getElementById("color").value;
    }
    changeBgColor();
  });
})();
