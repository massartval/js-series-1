//07-classes/02-methods/script.js - 7.2: methods

(() => {
  // your code here
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    sayHello() {
      return `Hello, ${this.firstName} ${this.lastName}!`;
    }
  }
  document.getElementById("run").addEventListener("click", function () {
    let Arnold = new Person("Arnold", "Schwarzenegger");
    console.log(Arnold.sayHello());
  });
})();
