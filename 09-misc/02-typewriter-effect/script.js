// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect

(() => {
  // your code here

  // Hide original text
  document.getElementById("target").innerHTML = "";
  // Initialize variables
  let i = 0;
  let txt = `Je suis un texte qui va apparaître dans un effet "machine à écrire", un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !`; /* The text */
  let speed = Math.random() * 200; /* The speed/duration of the effect in milliseconds */
  // Declare function
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("target").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  // Call function
  typeWriter();
})();
