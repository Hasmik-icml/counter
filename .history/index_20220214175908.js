const result = document.querySelector(".result");
const buttonLower = document.querySelector(".buttonLower");
const buttonAdd = document.querySelector(".buttonAdd");

buttonLower.addEventListener("click", function(){
    result.innerHTML--;
})
buttonAdd.addEventListener("click", function(){
    result.innerHTML++;
})

// function incrisOrDecris(){

// }
// document.querySelectorAll(".button").forEach(item => {
//     item.addEventListener("click", function(e){
//         console.log(e.target);
//         // this.innerHTML++;
//     })
// })


document.querySelector(".calculateNumber").addEventListener("click", function(){
   

})

function calculate(num1){
    return function(num2){
        return num1 + num2;
    }
}
let res = calculate(number1)(number2);
console.log(res);