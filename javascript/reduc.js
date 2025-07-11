// const numbers=[2,4,6,5,8,9,10]

// // const sum=numbers.reduce((accumulator ,currentvalue)=> {
// //     return accumulator + currentvalue
// // })
// // console.log(sum)

// const sum =numbers.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue
// })

// console.log(sum)

const usercart =[
    {productId:1,productName:'mobile',price:22000},
    {productId:2,productName:'protin',price:14000},
    {productId:3,productName:'mass giner',price:19000},
    {productId:4,productName:'TV',price:34000},
]
// const totalAmount=usercart.reduce((totalPrice,productPrice)=>{
//     return totalPrice+productPrice.price
// },0)
// console.log(totalAmount)
const totalAmount=usercart.reduce((totalprice,productpricr)=>{
    return totalprice + productpricr.price
},0)
console.log(totalAmount)