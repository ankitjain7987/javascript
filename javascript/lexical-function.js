// const myvar='value1';

// function myapp(){
//     // console.log('myvar')
//     const myFunc=()=>{
//         console.log('inside function',myvar)

//     }
//     // console.log('outside function',myvar)
//     myFunc();
// }
// myapp();
// myvar
// outside function value1
// inside function value1

const myvar='value1'
function myapp(){
    // console.log('function',myvar)
    const myFunc=()=>{
        console.log('inside function',myvar)
    }
    myFunc()
}
myapp()