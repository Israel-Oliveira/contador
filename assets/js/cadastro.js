let labelForm = document.querySelectorAll(".label")
let inputForm = document.querySelectorAll(".input")

console.log(inputForm)

function labelclick(i){
  labelForm[i].addEventListener("click", ()=>{
      inputForm[i].focus()
  })
}

for(let i = 0; i <labelForm.length; i++){
  labelclick(i)
}

