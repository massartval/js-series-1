
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    let isSure = false;
    let age;
    let gender;
    let town;
    function ask() {
        age = prompt(`What is your age? `);
        gender = prompt(`What is your gender? `);
        town = prompt(`Where do you live (town name)? `);
        while (isSure === false) {
            if (confirm(`Please confirm that you are ${age} years old, that you are a ${gender} and that you live in ${town}. If any of these entries are incorrect, please click cancel.`)) {
            isSure = true;
            } else {
            ask();
            }
        }
        alert(`Thank you for your input!`)
    }        
    ask();
})();
