// class Animal{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     Eat(){
//         return `${this.name} is eating food`
//     }

// }
// class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age)
//         this.speed=speed

//     }
//     get Run(){
//         return `${this.name} is running ${this.speed}~~~~~~~~~~~~~~~~~~`
//     }
// }
// const Tommy=new Dog('tommy',2,45)
// console.log(Tommy)
// const eat=Tommy.Eat()
// console.log(eat)

class Animal{
    constructor(name,age){
        this.name=name
        this.age=age

    }
    Eat(){
        return `${this.name} is eating food`
    }
}
class dog extends Animal{
        constructor(speed){
            super(name,age)
            this.speed=speed
        }
       
    }
    const tommy = new user1('tommy',2,45)
    console.log(tommy)
    const eat = tommy.Eat()
    console.log(eat)
