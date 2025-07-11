// function RicePromise(){
//     const bucket = ['coffee','chips','vagetables','salts','rice']
//     return new Promise((resolve,reject)=>{
//            if(bucket.includes('vagetables') && bucket.includes('salts') && bucket.includes('rice')){
//             resolve('fride rice')
//            }else{
//             reject('you can not do it')
//            }

//     })
// }
// RicePromise().then((result)=>{
//     console.log("you can eat",result)
// }).catch((error)=>{
//     console.log(error)
// })

// ---------------
// Promise && setTimeout

function mypromis(){
    
    return new Promise((resolve,reject)=>{
        let  value = true

        setTimeout(() => {

            if(value){
                resolve()
            }else{
                reject()
            }
        }, 5000);

    })
}
mypromis().then(()=>{console.log("resolved")

}).catch(()=>{console.log("rejected")})

