// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

(() => {
  const birds = [{ name: "mouette", fem: true }, { name: "corbeau" }, { name: "mésange", fem: true }, { name: "hibou" }, { name: "buse", fem: true }, { name: "pigeon" }, { name: "pie", fem: true }, { name: "vautour" }, { name: "faucon" }, { name: "rouge-gorge" }, { name: "tourterelle", fem: true }, { name: "corneille", fem: true }];
  const adjectives = new Set(["cendré", "huppé", "chantant", "hurlant", "perché", "grand", "petit", "bleu", "pantelant", "tangent", "arboré"]);

  // your code here
  document.getElementById("run").addEventListener("click", function () {
    let randBird = Math.trunc(Math.random() * birds.length);
    let randAdj = Math.trunc(Math.random() * adjectives.size);
    let items = Array.from(adjectives);

    document.getElementById("target").innerHTML = `${birds[randBird].name} ${items[randAdj]}`;
    birds[randBird].fem ? (document.getElementById("target").innerHTML = `la ${document.getElementById("target").innerHTML}e`) : (document.getElementById("target").innerHTML = `le ${document.getElementById("target").innerHTML}`);
  });
})();

/**
 *   // Random bird name
    let randomOne = Math.floor(Math.random * birds.length);
    let randName = birds.find((x) => x[randomOne]).name;
    //let randName = birds[randomOne].name;
    // Random adjective
    let adjectivesArray = Array.from(adjectives);
    let randomTwo = Math.floor(Math.random * adjectives.prototype.size);
    let randAdjective = adjectivesArray[randomTwo];
    // Final e if female bird name
    if (birds[randomOne].fem) {
      randAdjective = `${randAdjective}e`;
    }
    let birdName = `${randName} ${randAdjective}`;
    document.getElementById("target").innerHTML = birdName;
 */
