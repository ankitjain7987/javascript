// Parameter destructuring
// Object
// use in React


const person={
    name:'ankit',
    gender:'male',

}
// function personDetails(obj){
//     console.log(obj.name)
//     console.log(obj.gender)
//     console.log(obj.age)
// }
// personDetails(person)

// function personDetails(name,gender){
//     console.log(name)
//     console.log(gender)

// }
// personDetails(person)


const personDetails=(obj)=>{
    console.log(obj.name)
    console.log(obj.gender)
}
personDetails(person)