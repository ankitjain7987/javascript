// Promise
const bucket = ['coffee','chips','vagetables','salts','rice']
const frideRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes('vagetables') && bucket.includes('salts') && bucket.includes('rice')){
        resolve("fride rice")
    }else{
        reject("you not do it")
    }
})

    // Promise

// consume
// how to consume
frideRicePromise.then((myrice)=>{
    // jab promise resolve hoga 
    console.log('let do it',myrice)
}).catch((error)=>{
    console.log(error)
})



