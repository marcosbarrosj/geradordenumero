
let res = document.querySelector('section#resultado')
function clicou(){
    let min = 1 
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)


  


res.innerHTML = ` <p> ${num} </p>`


   
}
function zerar(){
    res.innerHTML = null
}




