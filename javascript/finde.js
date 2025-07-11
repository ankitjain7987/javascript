// const users=['ankit','aman','rohit','shivam']
// const user=users.find()
// console.log(user)

const users=[
    {userId:1,userName:'ankit'},
    {userId:2,userName:'aman'},
    {userId:3,userName:'ayush'},
    {userId:4,userName:'akash'},
    {userId:5,userName:'rohit'},
    {userId:6,userName:'kartik'},
    {userId:7,userName:'yesh'},
]
const myuser=users.find((user)=>{
    return user.userId===3
 })
console.log(myuser)