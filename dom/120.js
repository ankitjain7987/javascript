// const mainButton=document.querySelector(".button")
// const body=document.body;
// const currentColor =document.querySelector(".current-color")
// function randomColorGenerator(){
// const red=Math.floor(Math.random()*256);
// const yellow=Math.floor(Math.random()*256);
// const black=Math.floor(Math.random()*256);

// const randomColor=`rgb(${red},${yellow},${black})`
// return randomColor;
// }
// mainButton.addEventListener("click",()=>{
//     const randomColor=randomColorGenerator();  
//     body.style.backgroundColor=randomColor
//     currentColor.textContent=randomColor;
// })

const mainButton=document.querySelector(".button")
const body=document.body;
const currentColor=document.querySelector(".current-color");
function randomColorGenerator(){
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
    const randomColor=`rgb(${r},${g},${b})`
    return randomColor
}
mainButton.addEventListener("click",()=>{
    const randomColor=randomColorGenerator();
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
})