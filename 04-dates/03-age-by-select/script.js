// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    /**
     * Returns the birth date in an array (yyyy, mm, dd)
     */ function getBirthDate() {
      let birthDate = [];
      birthDate.push(+document.getElementById("dob-year").value);
      birthDate.push(+document.getElementById("dob-month").value);
      birthDate.push(+document.getElementById("dob-day").value);
      return birthDate;
    }
    console.log(`Your birth date is ${getBirthDate()}`);

    /**
     * Returns the date for today in an array (yyyy, mm, dd)
     */ function getToday() {
      today = new Date();
      todayYear = today.getFullYear();
      todayMonth = today.getMonth();
      todayDay = today.getDate();
      let todayDate = [];
      todayDate.push(todayYear);
      todayDate.push(todayMonth);
      todayDate.push(todayDay);
      return todayDate;
    }
    console.log(`The current date is ${getToday()}`);

    /**
     * Returns the number of complete years since your birth (aka your age)
     */ function calcAge() {
      let year = getToday()[0] - getBirthDate()[0];
      let month = getToday()[1] - getBirthDate()[1];
      let day = getToday()[2] - getBirthDate()[2];
      let age = [year, month, day];
      for (i = 2; i >= 0; i--) {
        if (age[i] < 1) {
          age[i - 1] = age[i - 1] - 1;
        }
      }
      // fun fact: year =/= age[0]
      console.log(`age = ${age}`);
      console.log(`year = ${year}`);
      console.log(`age[0] = ${age[0]}`);
      return age[0];
    }
    console.log(`You are ${calcAge()} years old`);
    alert(`You are ${calcAge()} years old`);
  });
})();
