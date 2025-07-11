// const numbers = [4,5,6,7,8,9]

// function myfunc(number,index){
//     console.log(`${number} ${index}`)
// }
// numbers.forEach(myfunc)

// ------------------------------

// const numbers=[6,7,4,2,8,9,5,3]

// numbers.forEach(function(number){
//     console.log(number*2)
// })

// --------------------------------

const users=[
    {name:'amkit',age:22},
    {name:'anuj',age:23},
    {name:'ayush',age:22},
    {name:'rohit',age:25},
    {name:'kunal',age:24},
    {name:'kartik',age:23},
]

// users.forEach(function (user){
//     console.log(user.name)
// })
// for(let user of users){
//     console.log(user.name)
// }
// users.forEach((user)=>{
// console.log(user.name)
// })


// const numbers=[4,6,7,8,9]

// numbers.forEach(function(number){
//     console.log(number*2)
// })
users.forEach((user)=>console.log(user.name))
