// const todoForm = document.querySelector(".form-todo")
// const todoinput = document.querySelector(".form-todo input[type='text']")
// const todoList = document.querySelector(".todo-list")


// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const newtodotext=(todoinput.value)
//     const newli=document.createElement("li")
//     const liInnerHtml=`<span class="text">${newtodotext}</span>
//           <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div>`
//     todoinput.value=""
//     newli.innerHTML=liInnerHtml
//     todoList.append(newli)

// })
// todoList.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("done")){
//         e.target.parentNode.previousElementSibling.style.textDecoration="line-through"
//     }
//     if(e.target.classList.contains("remove")){
//         e.target.parentNode.parentNode.remove()
//     }
// })

const todoForm=document.querySelector(".form-todo")
const todoinput=document.querySelector(".form-todo input[type='text']")
const todoList=document.querySelector(".todo-list")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newtodotext = todoinput.value
    const newli = document.createElement("li")
    const liInnerHtml=`<span class="text">${newtodotext}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>`
          todoList.append(newli)
          newli.innerHTML=liInnerHtml
          todoinput.value=""
})
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains('remove')){
        e.target.parentNode.parentNode.remove()
    }
    if(e.target.classList.contains('done')){
        e.target.parentNode.previousElementSibling.style.textDecoration="line-through"
    }
})