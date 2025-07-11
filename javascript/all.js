// const array =['value1','value2',]
// let myarray =array
// let [myver,myver1]=myarray
// console.log('hii',myver)
// console.log('hii',myver1)

// let array=[5,8,4,53,54,58,6]
// let array1=[]
// array1=[...array]
// // array1=[].concat(array)
// console.log(array1)


// let array=[5,8,4,53,54,58,6]
// array.push(25)
// console.log(array)


// let i=0;
// while(i<10){
//     console.log(i)
//     i++
// }

// for(let i =0 ;i<=100;i++){
//     console.log(i)
// }

// const data=[4,5,4,8,2,4,5,8]
// const data1=data.map((a)=>
//      a*a
// )
// console.log(data1)

const data=[4,5,4,8,2,4,5,8]
const data1=data.filter((a)=>{
    return a%2===0})
console.log(data1)