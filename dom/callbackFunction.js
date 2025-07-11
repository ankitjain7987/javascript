const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element,Text,color,time,onsuccessCallback,onfailureCallback){
    setTimeout(()=>{
        if (element){
    element.textContent = Text;
    element.style.color = color;
        if(onsuccessCallback){
        onsuccessCallback()
    }
}else{
    if (onfailureCallback) {
        onfailureCallback()
    }
}
    },time)

}

// pramid dom 

changeText(heading1,"one","red",1000,()=>{
    changeText(heading2,"two","pink",2000,()=>{
        changeText(heading3,"three","green",4000,()=>{
            changeText(heading4,"four","blue",3000,()=>{
                changeText(heading5,"five","brown",2000,()=>{
                    changeText(heading6,"six","cyan",1000,()=>{
                        changeText(heading7,"seven","#cda562",3000,()=>{

                        },()=>{ console.log("Heading1 does not exist")})
                    },()=>{ console.log("Heading1 does not exist")})
                },()=>{ console.log("Heading1 does not exist")})
            },()=>{ console.log("Heading1 does not exist")})
        },()=>{ console.log("Heading1 does not exist")})
    },()=>{ console.log("Heading1 does not exist")})
},()=>{ console.log("Heading1 does not exist")})