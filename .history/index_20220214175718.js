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
    const number1 = document.querySelector(".inputNumber1").value;
    const number2 = document.querySelector(".inputNumber2").value;

})
function number1(num1){
    return function(num2){
        return num1 + num2;
    }
}
let res = number1(5)(7);
console.log(res);