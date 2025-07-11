const URL="https://jsonplaceholder.typicode.com/posts"
const  sendMethod = (method,url)=>{
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            }else{
                reject(new Error("something want wrong"))
            }
        }
        xhr.onerror= ()=>{
            reject(new Error("network problem"))
        }
        xhr.send()
    })

}
sendMethod('GET',URL).then(response =>{
    const data = JSON.parse(response)
    // console.log(response)
    return data
}).then((data)=>{
    const id=data[3].id
    return id
})
.then((id)=>{
    const url =`${URL}/${id}`
    // console.log(url)
    return sendMethod("GET",url)
}).then(newResponce => {
    const newData = JSON.parse(newResponce)
    console.log(newData)
}).catch((error =>{
    console.log(error)
})
)