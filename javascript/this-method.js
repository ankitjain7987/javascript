// method 
// function inside object



// const person={
//     name:'ankit',
//     age:22,
//     about: function(){
//         console.log(`person name is ${this.name} and age ${this.age}`)
//     }

// }
// person.about()

// Call
function about(hobby){
        console.log(`person name is ${this.name} and age ${this.age} hobby ${hobby}`)
    }
const user1={
    name:'ankit',
    age:24
}
const user2={
    name:'rohit',
    age:25
}
const user3={
    name:'rohit',
    age:25,
    about:about
}
user3.about('cricket')


about.call(user2,'guitar')

// apply

about.apply(user2,['guitars'])

// bind

const funk =about.bind(user2,'git')
funk()