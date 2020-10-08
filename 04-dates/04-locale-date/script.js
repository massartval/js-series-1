// 04-dates/04-locale-date/script.js - 4.4: textual date

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here

  let currentTime = new Date();

  /**
   * Returns the day of the week in English
   */ function tellDayOfWeekInEnglish() {
    let weekdaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = currentTime.getDay();
    return weekdaysArray[day];
  }

  let dayOfMonth = currentTime.getDate();

  /**
   * Returns the month in English
   */ function tellMonthInEnglish() {
    let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = currentTime.getMonth();
    return monthsArray[month];
  }

  let year = currentTime.getFullYear();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  /**
   * Displays the date in "target"
   */
  function changeDate() {
    document.getElementById("target").innerHTML = `${tellDayOfWeekInEnglish()} ${dayOfMonth} ${tellMonthInEnglish()} ${year}, ${hours}h${minutes}`;
  }
  changeDate();
})();
