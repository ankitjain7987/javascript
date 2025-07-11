// event Object

// jab bhi ma kisi bhi element pe event listener add hoga 
// js Engine ---- line by line exeute karta hai
// browser ---- js engine +extra features
// browser ---- js engine +webapi

// jab browser ko pata chala ke user na event performe kia 
// jo hum listen kar rahe hai
// browser ------- 2
// 1.) callback function hai vo js engine ko degi .....
// 2.)callback function ka sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi


// const allbutton= document.querySelectorAll(".my-button button")
// for(let button of allbutton){
    //     button.addEventListener("click",function(){
        //         console.log(this,'click me')
//     })
// }


// const allbutton= document.querySelectorAll(".my-button button")
// allbutton.forEach(function(button){
// button.addEventListener("click",function(){
//     console.log(this,"hii")
// })
// })

// ---------------------
// const allbutton= document.querySelectorAll(".my-button button")
// allbutton.forEach(function(button){
// button.addEventListener("click",(e)=>{
//     console.log(e.currentTarget)
// })
// })

// ----------------

const allbutton= document.querySelectorAll(".my-button button")
for(let button of allbutton){
        button.addEventListener("click",(e)=>{
                console.log(e.currentTarget)
    })
}