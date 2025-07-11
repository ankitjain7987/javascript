// function myfun(number1, number2, callback) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     callback(number1, number2);
//   } else {
//     console.log("error");
//   }
// }
// // myfun('4','5',(num1,num2)=>{
// myfun(4, 6, (num1, num2) => {
//   console.log(num1 + num2);
// });


// -------------------
// function myfun(number1, number2, callback,callFailure) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     callback(number1, number2);
//   } else {
//     callFailure()
//   }
// }
// // myfun('4','5',(num1,num2)=>{
// myfun(4, 6, (num1, num2) => {
//   console.log(num1 + num2);}, ()=>{
//     console.log('wrong data type')
//     console.log('plese enter your number')
//   });

// ------------------

// function myfun(number1, number2, callback,callFailure) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     callback(number1, number2);
//   } else {
//     callFailure()
//   }
// }
// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
// function onfail(){
//     console.log('wrong data type')
//     console.log('plese enter your number')
// }
// // myfun('4','5',)
// myfun(4, 6, addTwoNumber,onfail);

function myfun(number1,number2,callback,callFailure){
    if(typeof number1 ==="number" && typeof number2==="number"){
      callback(number1,number2)

    }else{
      if(callFailure){
        callFailure()
      }
    }
}
function addTwoNumber(num1,num2){
  console.log(num1+num2)
}
function onfail(){
  console.log("fail")
}
myfun(4,4,addTwoNumber,onfail)

const 