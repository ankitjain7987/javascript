const grandparent=document.querySelector(".grandparent")
// const parent=document.querySelector(".parent")
// const child=document.querySelector(".child")

// // event capturing

// grandparent.addEventListener("click",()=>{
//     console.log("Capturing ON GRANDPARENT")
// },true)
// parent.addEventListener("click",()=>{
//     console.log("capturing on parent")
// },true)
// child.addEventListener("click",()=>{
//     console.log("capturing on child")
// },true)

// document.body.addEventListener("click",()=>{
//     console.log("capturing on body")
// },true)

// // not capture
// grandparent.addEventListener("click",()=>{
//     console.log("CLICK ON GRANDPARENT")
// })
// parent.addEventListener("click",()=>{
//     console.log("click on parent")
// })
// child.addEventListener("click",()=>{
//     console.log("click on child")
// })

// document.body.addEventListener("click",()=>{
//     console.log("click on body")
// })


grandparent.addEventListener("click",(e)=>{
    console.log(e.target)
    // e.target.style.color="red"
    // e.target.style.backgroundColor="aquamarine"
})



// grandparent.addEventListener("mouseleave",(b)=>{
//     b.target.style.color=""
//     b.target.style.backgroundColor=""
// })