//06-objects/02-assign-properties/script.js - 6.2: assign properties

(() => {
  //prettier-ignore
  const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
  const defaultProps = {
    available: true,
    os: "linux",
    user: null,
  };
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    for (item of computers) {
      let temp = {};
      // Adds the properties of defaultProps to temp
      Object.assign(temp, defaultProps);
      // Adds the properties of an item of the array computers to temp, overwriting the default properties if needed
      Object.assign(temp, item);
      // Adds the properties of temp to item
      Object.assign(item, temp);
    }
    console.log(computers);
  });
})();

/**
 * First attempt : 
 * 
 * // Iterate through items in the array computers
    for (let elem of computers) {
      // Iterate through the properties of each object
      for (let property in elem) {
        // If a property is missing, it should be replaced by the default value
        if (available && user && os == false) {
          elem.property = defaultProps.property;
        }
      }
    }
    console.log(computers);
 */
