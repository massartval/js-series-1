// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    /**
     * Returns the birth date in an array (yyyy, mm, dd)
     */ function getBirthDate() {
      let year = +document.getElementById("dob-year").value;
      let month = +document.getElementById("dob-month").value;
      let day = +document.getElementById("dob-day").value;
      let birthDate = [year, month, day];
      return birthDate;
    }
    console.log(`Your birth date is ${getBirthDate()}`);

    /**
     * Returns the date for today in an array (yyyy, mm, dd)
     */ function getToday() {
      today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let day = today.getDate();
      let todayDate = [year, month, day];
      return todayDate;
    }
    console.log(`The current date is ${getToday()}`);

    /**
     * Returns the number of complete years since your birth (aka your age)
     */ function calcAge() {
      // Substract birth date from current date
      let year = getToday()[0] - getBirthDate()[0];
      let month = getToday()[1] - getBirthDate()[1];
      let day = getToday()[2] - getBirthDate()[2];
      let age = [year, month, day];
      // Adjusts the month if (day < 1) and adjusts the year if (month < 1)
      for (i = 2; i >= 0; i--) {
        if (age[i] < 1) {
          age[i - 1] = age[i - 1] - 1;
        }
      }
      // fun fact: year =/= age[0]
      console.log(`- age = ${age}`);
      console.log(`- year = ${year}`);
      console.log(`- age[0] = ${age[0]}`);
      return age[0];
    }
    alert(`You are ${calcAge()} years old`);
  });
})();
