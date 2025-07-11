class student{
    constructor(name,age,email,address){
        this.name=name
        this.age=age
        this.email=email
        this.address=address
    }
    about(){
        return `${this.name} and ${this.age}`
    }
    is18(){
        return this.age >= 18
    }
}
const user1=new student('ankit',24,'ankitjain@gmail.com','is address')
const user2=new student('aman',14,'amanjain@gmail.com','is address')
// console.log(user1)
const about = user1.about()
console.log(about)
const is18=user2.is18()
console.log(is18)