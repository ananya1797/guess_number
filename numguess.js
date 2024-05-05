let myButton=document.querySelector('button');
let myInput=document.querySelector('input');
let num=64;
let count=0,guess;
while(count<5){
    myButton.addEventListener("click", function (){
        if(num==myInput.value){
          alert('Congratulations, Youve entered the right number');
        }
        else{
            alert('Try again. Number of counts left is:'+(5-count));
            
        }
    });
    count++;
}