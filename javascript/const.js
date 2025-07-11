// const fruits=['mango','apple','banana']
// // fruits=[] not change const value
// fruits.push('kive')
// console.log(fruits)


const fruits=['mango','apple','banana']
const fruits1=[]
let i=0;
while(i<=fruits.length){
   fruits1.push(fruits[i])
    i++
}
console.log(fruits1)