// question 1
var myFunctionExpression = function() {
    console.log("Joris Neyens");
}

//question 2
const button = document.querySelector(".btn");

function clickEvent() {
    console.log("I was clicked");
}

button.addEventListener("click", clickEvent)

//question 3
const fistName = document.querySelector("#firstName");

function keyValue() {
    console.log(event.target.value);
}

firstName.addEventListener("keydown", keyValue);

//question 4
const hoverButton = document.querySelector("button");

function addHover() {
    event.target.classList.add("hover");
}

hoverButton.addEventListener("mouseover", addHover);

//question 5
const dataAttribute = document.querySelector('[data-animal="dog"]')

function removeHover() {
    event.target.classList.remove("hover");
}

dataAttribute.addEventListener("mouseout", removeHover);

//question 6
const ulList = document.querySelector("li") 

for(let i = 0; i < ulList.length; i++) {

ulList[i].addEventListener("mouseover", logAnimal)

}
function logAnimal() {
    event.target.dataset.animal;
}

//question 7
const animal = "cow";

switch(animal) {

    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;

    default: 
        console.log("Harrumph");

}

//question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(names) {
    console.log(names);
});

//question 9
function logHello() {
    
    console.log("hello");

    if(counter === 5) {
        clearInterval(stopInterval);
    }

    counter++;
}
let counter= 1;

const stopInterval = setInterval(logHello, 500);

//question 10
const divText = document.querySelector(".container");

function changeText() {
    divText.innerText = "text updated";
}

setTimeout(changeText, 2000);