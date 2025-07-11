const URL="https://jsonplaceholder.typicode.com/posts"
// fetch(URL)
// .then((response)=>{
//     // console.log(response)
//     const data = response.json()
//     return data
// }).then(data =>{
//     console.log(data)
// }).catch((error)=>{
//     console.log("loss connection")
//     console.log(error)
// })


// ---------
fetch(URL)
.then(response => {
    if(response.ok){
        return response.json()
    }else{
        throw new Error('error')
    }
    
}).then(data => {
    console.log(data)
}).catch((error)=> {
    console.log("sonething wrong")
    console.log(error)
})

//--------------------post method

// fetch(URL,{
//     method:'POST',
//     body:JSON.stringify({
//         title:'foo',
//         body:bar,
//         userid:1,
    
//     }),
//     headers : {'Content-type':'application/json ; charset=UTF-8'

//     },
// })
// .then(response => {
//     if(response.ok){
//         return response.json()
//     }else{
//         throw new Error('error')
//     }
    
// }).then(data => {
//     console.log(data)
// }).catch((error)=> {
//     console.log("sonething wrong")
//     console.log(error)
// })