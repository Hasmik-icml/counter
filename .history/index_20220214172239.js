const result = document.querySelector(".result");
const buttonLower = document.querySelector(".buttonLower");
const buttonAdd = document.querySelector(".buttonAdd");

// buttonLower.addEventListener("click", function(){
//     result.innerHTML--;
// })
// buttonAdd.addEventListener("click", function(){
//     result.innerHTML++;
// })

document.querySelectorAll(".button").forEach(item => {
    item.addEventListener("click", function(){
        console.log(this);
        this.innerHTML++;
    })
})