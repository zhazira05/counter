let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
console.log(count)
let countGuest = document.getElementById("count-guest")
console.log(countGuest)
function add1(){
    count += 1
   countEl.textContent = count
}
function add2(){
    count += 2
   countEl.textContent = count
}
function add3(){
    count += 3
   countEl.textContent = count
}
let forGuest = 0
console.log(forGuest)
function increase1(){
    forGuest += 1
   countGuest.textContent = forGuest
}
function increase2(){
    forGuest += 2
   countGuest.textContent = forGuest
}
function increase3(){
    forGuest += 3
   countGuest.textContent = forGuest
}

function reset(){
    countEl.textContent = 0
   count = 0
   countGuest.textContent = 0
    forGuest = 0
   }