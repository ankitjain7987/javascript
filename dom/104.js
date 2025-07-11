// get and set attrubutes
const link=document.querySelector("a");
console.log(link.getAttribute("href").slice(1))
link.setAttribute("href","https://www.youtube.com/")
console.log(link.getAttribute("href"))

const form=document.querySelector(".form-todo input")
console.log(form.getAttribute("type"))