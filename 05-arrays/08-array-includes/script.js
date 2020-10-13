// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {
  const fruits = ["apple", "perry", "strawberry", "tomato", "kiwi", "banana", "orange", "mandarin", "durian", "peach", "grapes", "cherry"];

  // your code here
  document.getElementById("run").addEventListener("click", function () {
    console.log(fruits);
    console.log(`Does this array include an apple?`);
    if (fruits.includes("apple")) {
      console.log(`Yes, it does.`);
    } else {
      console.log(`No, it doesn't.`);
    }
  });
})();
