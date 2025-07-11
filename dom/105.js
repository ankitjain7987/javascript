// get multiple elements using getElements by class name
// get multiple elements items using quearySelectorAll

const navIitem=document.getElementsByClassName("nav-item")//HTMLCollection
console.log(navIitem)
const navIitems=document.querySelectorAll(".nav-item")//NodeList 
console.log(navIitems)