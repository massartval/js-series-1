
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        /**
         * Returns the square numbers between 1 and 21 by comparing the square root of each number with the same square root truncated to an integer. 
         * For exemple, the square root of 3 is 1.73(...), and the truncated square root of 3 is 1. They're different, 3 is therefore not a square number.
         */
        let array = [];
        for (i = 1; i <= 21; i++) {
            if (Math.sqrt(i) == parseInt(Math.sqrt(i))) {
            array.push(i);
            }
        } 
        alert(`The square numbers between 1 and 21 are ${array}`);
    });
})();

/**
 * Solution de Manon 
 * let array = [];

        for (let i = 1; i < Math.sqrt(21); i++) {
            array.push(i ** 2);
        }

        alert(array);
 */



 /**
  * Test 
    for (i = 1; i <= 21; i++) {
    console.log(`Results for i = ${i}`)
    console.log(Math.sqrt(i))
    console.log(parseInt(Math.sqrt(i)))
    if (Math.sqrt(i) == parseInt(Math.sqrt(i))) {
        console.log(`${i} is a square number`);
    }
    }
  */