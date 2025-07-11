const URL="https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
// console.log(xhr)
// step 1
// console.log(xhr.readyState)
xhr.open("GET",URL)
// console.log(xhr.readyState)
// xhr.onreadystatechange=function(){
//     console.log(xhr)
//     if(xhr.readyState === 4){
//         const responce = xhr.response;
//         const data = JSON.parse(responce)
//         console.log(data)
//     }
// }
xhr.onload= function(){
    // console.log(xhr.readyState)
    const responce = xhr.response;
     const data = JSON.parse(responce)
    console.log(data)
}

xhr.send()