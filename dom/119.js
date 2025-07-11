const allbutton=document.querySelectorAll(".my-button button")
allbutton.forEach(button=>{
    button.addEventListener('click',(e)=>{
        e.target.style.color="red"
        e.target.style.backgroundColor="white"
    })
})
