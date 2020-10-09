// 06-objects/01-generate-object/script.js - 6.1: genererate an object

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    let me = { lastName: "Massart", firstName: "Valentin", age: 28, city: "Charleroi", country: "Belgium" };
    console.log(me);
    alert(`Salut, je m'appelle ${me.firstName} ${me.lastName}, I am ${me.age} and I live in ${me.city}, ${me.country}.`);
  });
})();
