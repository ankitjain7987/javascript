const product=[
    {productId:1,productName:'p1',price:22000},
    {productId:2,productName:'p2',price:14000},
    {productId:3,productName:'p3',price:19000},
    {productId:4,productName:'p4',price:20000},
    {productId:5,productName:'p5',price:340},
    {productId:6,productName:'p6',price:540},
    {productId:7,productName:'p7',price:640},
]
// const cart=product.every((productPrice)=>productPrice.price < 30000)
const cart=product.some((productPrice)=>productPrice.price > 30000)
console.log(cart)