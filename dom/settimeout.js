// console.log("script start")
// const id =setTimeout(() => {
//     console.log("inside setTimeout")
// },1000);

// for(let i=1;i<100;i++){
//     console.log("hello")
// }
// console.log("script end")
// // console.log("clearTimeout")
// // clearTimeout(id)
// console.log(id)

// -------------------------
const currentcolor = document.querySelector(".current-color");
const body = document.body;
const button = document.querySelector("button");
const interbelid = setInterval(() => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  body.style.background = rgb;

  body.style.background = rgb;
  currentcolor.textContent = rgb; 
}, 1000);
button.addEventListener("click", () => {
  clearInterval(interbelid);
  button.textContent = body.style.background;
});
