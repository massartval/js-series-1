// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
  /**
   * Returns local hour between 0 and 23
   */ function getTime() {
    let date = new Date();
    let hour = date.getHours();
    return hour;
  }
  /**
   * Returns the correct greeting according to the time of the day
   */ function greetings() {
    if (getTime() < 18) {
      document.getElementById("target").innerHTML = "Hello!";
    } else {
      document.getElementById("target").innerHTML = "Good evening!";
    }
  }
  greetings();
})();
