// // spread operator object

const obj1={
    key1:'value1',
    key2:'value2'
};
const obj2={
    key1:'value5',
    key3:'value3',
    key4:'value4'
}
const newobj={...obj1,...obj2,key3:'value6'}
console.log(newobj)

// Object destructuring





// const person={
    
//     name:'ankit',
//     age:22,
//     language:'javascript',
//     city:'Gwalior'
// }

// const person1={
    
//     name:'ankit',
//     age:22,
//     language:'javascript',
//     city:'Gwalior'
// }
// const newper={...person,...person1}
// console.log(newper)