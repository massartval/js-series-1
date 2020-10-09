// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
  let fruits = ["pomme", "poire", "fraise", "tomate", "orange", "mandarine", "durian", "pêche", "raisin", "cerise"];

  // your code here
  document.getElementById("run").addEventListener("click", function () {
    console.log(fruits);
    // Starts modifying the array at index 0, removes 1 item and adds "banana"
    fruits.splice(0, 1, "banana");
    console.log(fruits);
    // Starts modifying the array at the end and removes 1 item
    fruits.splice(fruits.length - 1, 1, "kiwi");
    console.log(fruits);
  });
})();
