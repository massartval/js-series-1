
// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
  // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
  console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
  console.log('Hello Keller programmer');

  // YOUR CODE HERE
  let cake = prompt (`Do you want more cake? (yes/no)`);
  if ((cake === 'yes') || (cake === 'Yes')) {
    alert(`Congratjulashons!`);
  } 
  else {
    alert(`Moar kek for me den!`);
  } 
})();

