// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
  let timeArray = [];
  /**
   * Returns local hour (0-23) and minutes (O-59) in an array
   */ function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    timeArray.push(hour);
    timeArray.push(minutes);
  }
  getTime();
  /**
   * Returns the correct greeting according to the time of the day (before / after 17:30)
   */ function greetings() {
    if (timeArray[0] < 18 || (timeArray[0] < 17 && timeArray[1] < 30)) {
      document.getElementById("target").innerHTML = "Hello!";
    } else {
      document.getElementById("target").innerHTML = "Good evening!";
    }
  }
  greetings();
})();
