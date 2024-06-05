let investment=document.querySelectorAll('input')[0]
let interest=document.querySelectorAll('input')[1]
let years=document.querySelectorAll('input')[2]
let button=document.querySelector('button')
let answer=document.querySelector('span')



// function calculate(){

// answer.innerHtml= final()
// }

// function calc(){
//  answer1 = (investment.value)*(1+interest.value/100 *years.value)

// }
// // calc()

// let answer1 
// let a = calc()

// function interestAmount(){
// let interestA=answer1 -investment.value
// }

// let b = interestAmount()

function final(){
//   let interestA 
 let x = interest.value.split('%').map(Number)
 console.log(x);
 let answer1 = investment.value * (eval(`${1} + ${(x[0]/100 * years.value)}`))
 let interestA=(answer1.toFixed(2) - investment.value).toFixed(2)
 answer.innerText = "R "+ answer1  + " The interest you made is : " + " R " +interestA 
}

button.addEventListener('click',final)