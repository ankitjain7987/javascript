// function myfun(callback){
//     console.log("function is duing task 1")
//     callback();
// }
// function myfun2(){
//     console.log("function is duing tast 2")
// }
// myfun(myfun2)
// ------------------------

// function myfun(callback){
//      console.log("function is duing task 1")
//      callback()
// }
// myfun(function myfun2(){
//     console.log("function is duing tast 2")
// })


// ----------------------
function addNumber(number1,number2,callback){
    console.log(number1,number2)
    callback(number1,number2)
}
function addTwoNumber(num1,num2){
    console.log(num1+num2)
}
addNumber(2,3,addTwoNumber)