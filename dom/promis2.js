// Promise chaining
// Promise resolve
// const mypromis=Promise.resolve(5)
// Promise.resolve(5).then((value)=>{

//     (console.log(value))
// })

function mypromis(){
    return new Promise((resolve,reject)=>{
        resolve('foo')
    })
}
mypromis().then((value)=>{
    console.log(value)
    value +="bar"
    return value  //ya pe promis return ho raha ha
    // return Promise.resolve(value)    //ya be kar sakta ha
}).then((value)=>{
    console.log(value)
})