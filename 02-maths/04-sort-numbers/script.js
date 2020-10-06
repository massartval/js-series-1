// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {
    // your code here
    let numbers = [];
    /**
     * Returns the numbers in an array instead of a string
     */ function stringToArray() {
      numbers = document.getElementById("numbers").value.split(",");
      return numbers;
    }
    /**
     * Returns the array sorted in ascending order
     * @param function(a, b) Compares a with b and returns the difference
     */ function sort() {
      numbers.sort(function (a, b) {
        return a - b;
      });
    }
    sort(stringToArray());
    alert(numbers);
  });
})();
