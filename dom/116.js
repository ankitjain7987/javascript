const allbutton =document.querySelectorAll(".my-button button")
// console.log(allbutton)

// allbutton.addEventListener("click",()=>console.log("hii"))

// for(let button of allbutton){
//     button.addEventListener("click" , function(){
//         // console.log(this)
//         console.log(this.textContent)
//     })
// }


// allbutton.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this.textContent)
//     })

// })

allbutton.forEach(function(button){
    button.addEventListener('click',(e)=>{
        console.log(e.target)
    })
})


