let i = 1;

for (i = 1; i <= 21; i++) {
console.log(`Results for i = ${i}`)
console.log(Math.sqrt(i))
console.log(parseInt(Math.sqrt(i)))
if (Math.sqrt(i) == parseInt(Math.sqrt(i))) {
    console.log(`${i} is a square number`);
}

}