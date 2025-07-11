// fetch(URL)
// .then((Response)=>{
//     return Response.json()
// })
// .then((data)=>{
//     console.log(data)
// })


const URL="https://jsonplaceholder.typicode.com/posts0"
async function getpost() {
    const response=await  fetch(URL)
    if(!response.ok){
        throw Error("something want wrong")
    }
    const data =await response.json()
    return data
    
}
getpost().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
    console.log("error")
    
})