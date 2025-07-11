// Object inside array
// very useful in real world application
// const users=[
//     {userId:1,firstname: 'ankit',gender:'male'},
//     {userId:2,firstname: 'ayush',gender:'male'},
//     {userId:3,firstname: 'aman',gender:'male'},
// ]
// for(let user of users){
//     console.log(user.firstname)
// }

// let [user1,user2,user3]=array
// console.log(user1.firstname)


// nested destructuring-------------------------------------------

// const array=[
//     {userId:1,firstname: 'ankit',gender:'male'},
//     {userId:2,firstname: 'ayush',gender:'male'},
//     {userId:3,firstname: 'aman',gender:'male'},
// ]
// const [{firstname:F},{gender:G}]=array
// console.log(F)



const users=[
    {userId:1,firstname: 'ankit',gender:'male'},
    {userId:2,firstname: 'ayush',gender:'male'},
    {userId:3,firstname: 'aman',gender:'male'},
]
// const [user1,user2,user3] = users
// console.log(user1)
const [{firstname:user2},{gender:usergender}]=users
console.log(user2)