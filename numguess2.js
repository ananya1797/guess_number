let myButton = document.querySelector('button');
let myInput = document.querySelector('input');
let num = parseInt((Math.random(1,100))*100);
let count = 1;

myButton.addEventListener("click", function() {
    if (count < 5) {
        guess = parseInt(myInput.value);
        if (num === guess) {
            alert('Congratulations, You have entered the right number');
            
        } else {
            alert('Try again. Number of guesses left is: ' + (5 - count));
            count++;
        }
    } else {
        alert('You have reached the maximum number of guesses.The number was:'+num);
        
    }
});
