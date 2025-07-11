// function add(){
//     console.log('hello')
// }

// function sum(callback){
//     callback()

// }
// sum(add)

// function mycall(name){
//     console.log('hello ankit')
//     console.log(`hello ${name}`)
// }
// function mycall2(callback){
//     console.log('hii there')
//     callback('ayush')

// }
// mycall2(mycall)

function myfun(name){
    console.log('hello')
    console.log(`hii ${name}`)
}
function myfun1(callback){
    console.log('hello world')
    callback('ankit')
}
myfun1(myfun)