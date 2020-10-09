// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    // Friday 13th ==> Sunday 1st
    let monthsWithFridays = [];
    let year = new Date(document.getElementById("year").value);
    // Logs the 1st day (January 1st) of a given year
    console.log(year);
    // Iterates through the months of that year
    for (i = 1; i <= 12; i++) {
      year.setMonth(i);
      // If the 1st day of the months (0) is a Sunday (year.getDay == 0), push to monthsWithFridays
      if (year.getDay() == 0) {
        monthsWithFridays.push(year.getMonth(i));
      }
    }
    // Returns the months with Sunday 1st in numbers, not in English
    console.log(monthsWithFridays);

    /**
     * Returns the months with Sunday 1st in English
     */ function tellMonthsWithFridaysInEnglish() {
      let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let monthsWithFridaysInEnglish = [];
      for (i = 0; i < monthsWithFridays.length; i++) {
        monthsWithFridaysInEnglish.push(monthsArray[monthsWithFridays[i]]);
      }
      console.log(monthsWithFridaysInEnglish);
      return monthsWithFridaysInEnglish;
    }
    alert(tellMonthsWithFridaysInEnglish());
  });
})();
