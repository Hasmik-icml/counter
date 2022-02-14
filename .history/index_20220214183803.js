// increase decrease
const result = document.querySelector(".result");
const buttonLower = document.querySelector(".buttonLower");
const buttonAdd = document.querySelector(".buttonAdd");

buttonLower.addEventListener("click", function(){
    result.innerHTML--;
})
buttonAdd.addEventListener("click", function(){
    result.innerHTML++;
})

function increaseOrdecrease(){

}
document.querySelectorAll(".button").forEach(item => {
    item.addEventListener("click", function(e){
        console.log(e.target);
        // this.innerHTML++;
    })
})


// calculate sum of two numbers 
document.querySelector(".calculateNumber").addEventListener("click", function(){
    const number1 = +document.querySelector(".inputNumber1").value;
    const number2 = +document.querySelector(".inputNumber2").value;
    document.querySelector(".resultSum").innerHTML = calculate(number1)(number2);

})

function calculate(num1){
    return function(num2){
        return num1 + num2;
    }
}

// timer
const buttonStart = document.querySelector(".buttonStart");
const buttonStop = document.querySelector(".buttonStop");
const buttonCansle = document.querySelector(".buttonCansle");
const resultTimer = document.querySelector(".resultTimer");
let interval;

buttonStart.addEventListener("click", function(){
    interval = setInterval(timerStart, 1000);
})

buttonStop.addEventListener("click", function(){
    timerStop();
})

buttonCansle.addEventListener("click", function(){
    resultTimer.innerHTML = "0";
})

function timerStart(){
    resultTimer.innerHTML++;
}

function timerStop(){
  clearInterval(interval);
}