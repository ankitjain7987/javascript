const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function chanceText(element,text,color,time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if(element){
                element.style.color=color;
                element.textContent=text;
                resolve()
            }else{
                reject("element not found")  
            }
        },time);
        });
}

// chanceText(heading1,'one','red',1000).then(()=>{
//     return chanceText(heading2,'one','red',1000)
// }).then(()=>{
//      return chanceText(heading3,'one','red',1000)
// }).then(()=>{
//      return chanceText(heading4,'one','red',1000)
// }).then(()=>{
//      return chanceText(heading5,'one','red',1000)
// }).then(()=>{
//      return chanceText(heading6,'one','red',1000)
// }).then(()=>{
//      return chanceText(heading7,'one','red',1000)
// })

// ---------------OR
chanceText(heading1,'one','red',1000)
.then(()=>chanceText(heading2,'two','orange',1000))
.then(()=>chanceText(heading3,'two','orange',1000))
.then(()=>chanceText(heading4,'two','orange',1000))
.then(()=>chanceText(heading5,'two','orange',1000))
.then(()=>chanceText(heading6,'two','orange',1000))
.then(()=>chanceText(heading7,'two','orange',1000))
.catch((error)=>alert(error))
