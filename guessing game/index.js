let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = Math.floor(Math.random() * 8);

btn.addEventListener('click', function(){
let input = document.getElementById(`userinput`).value;
if (input == number){
     output.innerHTML = `you guessed right,your number was ${number}`

} else if (input < number){
    output.innerHTML = "you guessed too low!"
};
if (input > number){
    output.innerHTML="you guessed too high!"

} 

});