// const number=[6000,55,4,37,77,8,900]
// // number.sort()
// const num=number.sort((a,b)=>{
//     return a-b
// })
// console.log(num)

const product=[
    {productId:1,productName:'p1',price:22000},
    {productId:2,productName:'p2',price:14000},
    {productId:3,productName:'p3',price:19000},
    {productId:4,productName:'p4',price:20000},
    {productId:5,productName:'p5',price:340},
    {productId:6,productName:'p6',price:540},
    {productId:7,productName:'p7',price:640},
]
// const LowToHigh=product.sort((low,high)=>{
const LowToHigh=product.slice(0).sort((low,high)=>{
    return low.price - high.price
})
console.log(LowToHigh)