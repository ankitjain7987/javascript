// static list vs live list

// querySekectirAll hamein static list degi
// getElementsByTagName haimen live list degi

//  const listItem = document.querySelectorAll(".todo-list li")
//  const sixthline=document.createElement("li")
//  sixthline.textContent='item 6'
//  const ul=document.querySelector(".todo-list")
//  ul.append(sixthline)
//  console.log(listItem)



const ul =document.querySelector(".todo-list")
const listItem=ul.getElementsByTagName("li")
const sixthline=document.createElement("li")
sixthline.textContent='item 6'
ul.append(sixthline)
console.log(listItem)

