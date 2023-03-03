// console.log("First Program");


// console.log(document.body.style.background ="beige"); 

// window.setTimeout(function() {
//     document.body.style.background ="pink";
// }, 5000);

// window.setInterval(function(){
//         document.body.innerHTML = `<h1>${new Date()}</h1>`
// },1000);

// const result = window.prompt("What is your Name?");
// console.log(result)

//JS Selector
const title = document.getElementsByClassName("purple");
title[0].style.fontSize = "60px";

const firstList = document.querySelectorAll(".purple");

firstList.forEach(function (item){
    item.style.color ='purple';
})

//Events

// document.addEventListener("click", function(){
    console.log("You pressed clicked");
// });
const button = document.querySelector('button');

document.addEventListener("keyup",function(event) {
    console.log(event);
    document.body.style.background ="pink";
})
