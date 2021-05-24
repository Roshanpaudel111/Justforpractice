let maximum = parseInt(prompt('Please enter a maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Please enter a valid number'));
}

const targetnum = Math.floor(Math.random()*maximum) + 1;

console.log(targetnum);

let guess = prompt('Enter your first guess')
let count = 1;

while (parseInt(guess) !== targetnum ) {
    count++
    if (guess === 'q') {
        alert(`Okay quitting!!!!!`);
        break;
    }
   if (parseInt(guess)<targetnum) {
       guess = prompt ('To low!!');
       
   }
   if (parseInt(guess)>targetnum) {
       guess = prompt ('To High!!');
       
   }
   else{
    alert(`Congrats! you win in ${count} attempts.`);
   }
   
}
