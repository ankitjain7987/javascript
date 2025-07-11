// keypress Event
// mouseover event

// const body = document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key)
// })

// const mainButton=document.querySelector(".btn-headline")
// mainButton.addEventListener("mouseover",(mousehover)=>{
//     // console.log("mouseover event ocurred")
//     mousehover.currentTarget.style.color='red'
//     // mousehover.currentTarget.style.backgroundColor="gray"
// })
// mainButton.addEventListener("mouseleave",(mouseleavee)=>{
//     console.log(mouseleavee)
//     mouseleavee.target.style.color=""
//     // mouseleavee.target.backgroundColor="white"

// })
const mainButton=document.querySelector(".btn-headline")
mainButton.addEventListener("mouseover",(mousehover)=>{
    // console.log(mainButton)
    mousehover.target.style.color="pink"
    mousehover.target.style.backgroundColor="red"
})
mainButton.addEventListener("mouseleave",(mouseleavee)=>{
    mouseleavee.target.style.color="";
    mouseleavee.target.style.backgroundColor=""
})