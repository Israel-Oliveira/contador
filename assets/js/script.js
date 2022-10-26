let contador = document.querySelector("#numCont");
let interval = 5000;

let startValue = 0;
let endValue = parseInt(contador.getAttribute("data-val"));

let duracao = Math.floor(interval/ endValue)

let counter = setInterval(function(){
  startValue += 1;
  contador.textContent = startValue
  if(startValue ==  endValue){
    clearInterval(counter)
  }
})

//Macbok

const munitor = document.querySelector(".munitor")
const linguagens = document.querySelector("#efeito")
const espacim = document.querySelector("#espacim")

// munitor.addEventListener("click", ()=>{
//   munitor.classList.toggle('baixado')
// })


setInterval(cagada, 13500)

function cagada(){
  setTimeout(munitor2, 2000);

  setTimeout(aparecaLinguagem, 3300);
  
  setTimeout(aparecaLinguagem, 13000)
  
  setTimeout(munitor2, 13000);
}




function munitor2(){
  munitor.classList.toggle('baixado')
}

function aparecaLinguagem(){
  linguagens.classList.toggle('linguagens')
  linguagens.classList.toggle('linguagens-hid')
  espacim.classList.toggle('espacim')
}


