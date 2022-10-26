// Iteration 2: Generate 2 random number and display it on the screen
let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);
var num1=document.getElementById("number1");
var num2=document.getElementById("number2");

num1.innerHTML=x;
num2.innerHTML=y;


// Iteration 3: Make the options button functional
const greater = document.getElementById("greater-than");
const equal = document.getElementById("equal-to");
const lesser = document.getElementById("lesser-than");

var score=0;
console.log(score);

greater.onclick = () =>{
    if(x>y){
        // window.location.reload();
        score++;
        resetTime(timerId);
        console.log(score);
   
    }
    else{
       location.href="gameover.html"
    }
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    num1.innerHTML = x;
    num2.innerHTML = y;
    
    


    }
equal.onclick = () =>{
    if(x == y){
       // window.location.reload();
        score++;
        resetTime(timerId)
        console.log(score);
   
     
    }
    else{
        location.href="gameover.html";
    }
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    num1.innerHTML = x;
    num2.innerHTML = y;
    

}
lesser.onclick = () =>{
    if(x<y){
    //    window.location.reload();
        score++;
        resetTime(timerId);
        console.log(score);
   
     
    }
    else{
        location.href="gameover.html";
    }

x = Math.floor(Math.random() * 100);
y = Math.floor(Math.random() * 100);
num1.innerHTML = x;
num2.innerHTML = y;
    

    }

// Iteration 4: Build a timer for the game
var time=5;
var timer=document.getElementById("timer");
var timerId;

function startTimer(){
    time=5;
    timer.innerHTML=time;
    timerId = setInterval(() =>{
        if(time==0){
            location.href="gameover.html";
            
        }
        timer.innerHTML=time;
        time--;

    },1000);
    localStorage.setItem("scgameoverore",score)

}
startTimer();
function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
}


