// document.createElement()
// append
// prepend
// remove 
// const todolist=document.querySelector(".todo-list")
// const newtodolist = document.createElement("li")
// newtodolist.textContent="hello"

// todolist.append(newtodolist)
// console.log(newtodolist)
const todolist=document.querySelector(".todo-list")
const newTodoList=document.createElement("li")
newTodoList.textContent="hello"
todolist.append(newTodoList)
console.log(newTodoList)

// const newtodolist=document.createElement("li");
// newtodolist.textContent="hello";
// const todolist=document.querySelector(".todo-list")
// todolist.append(newtodolist)

// const tool1=document.querySelector(".todo-list li");
// tool1.remove();
// console.log(tool1)

// // before 
// // after
//  const newtodolist=document.createElement("li")
//  newtodolist.textContent='hello'
//  const todolist=document.querySelector(".todo-list")
//  todolist.before(newtodolist)

// const newtodolist=document.createElement("li")
// newtodolist.textContent='hello ak'
// const todolist=document.querySelector(".todo-list")
// todolist.after(newtodolist)


// clone Nodes 
// const ul=document.querySelector(".todo-list")
// const li=document.createElement("li")
// li.textContent='hii bhai'
// li2=li.cloneNode(true)
// ul.append(li)
// ul.prepend(li2)