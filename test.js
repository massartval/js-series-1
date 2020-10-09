let dayOfMonth = currentTime.getDate();
let weekdaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (dayOfMonth === weekDaysArray[4]) {
  array.push(month);
}

document.getElementById("run").addEventListener("click", function () {
  let year = document.getElementById("year").value;
  let start = new Date(year);
  let yearTwo = document.getElementById("year").value + 1;
  let end = new Date(yearTwo);
  console.log(start);
  console.log(end);
});
