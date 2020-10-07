// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    /**
     * Returns a hex code for a random color
     */ function generateRandomColor() {
      // prettier-ignore
      const hexValuesArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      let hexCode = "#";
      // Loops 6 times to generate the 6 values of the hex code
      for (i = 1; i <= 6; i++) {
        // Gets a random value between "0" and "f" (0-16)
        let randomHex = Math.floor(hexValuesArray.length * Math.random());
        // Assigns the random hex value from the array to the variable "randomValue"
        let randomValue = hexValuesArray[randomHex];
        // Concatenates the random hex values
        hexCode = hexCode + randomValue;
      }
      return hexCode;
    }

    function changeBgColorRandom() {
      document.body.style.backgroundColor = generateRandomColor();
    }
    changeBgColorRandom();
    alert(`The background color is now ${generateRandomColor()}`);
  });
})();
