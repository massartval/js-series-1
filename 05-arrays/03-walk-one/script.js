// 05-arrays/01-get-element/script.js - 5.1: walk through the list

(() => {
  let fruits = ["apple", "pear", "raspberry", "tomatoes", "kiwi", "banana", "orange", "mandarin", "durian", "peache", "grap", "cherry"];

  // your code here
  document.getElementById("run").addEventListener("click", function () {
    for (elem of fruits) {
      console.log(elem);
    }
  });
})();
