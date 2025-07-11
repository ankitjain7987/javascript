// const allbutton=document.querySelectorAll(".my-button button")
// allbutton.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget.textContent)
//     })
// })


const allbutton=document.querySelectorAll(".my-button button")
allbutton.forEach((button)=>{
    button.addEventListener("click",(e)=>{
       console.log(e.currentTarget.textContent)
    })
})

