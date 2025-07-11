const student=function(name,age,email,address){
    const User=Object.create(student.prototype)
    User.name=name
    User.age=age
    User.email=email
    User.address=address
    return User
}
student.prototype.about=function(){
    return `${this.name} and age ${this.age}`
}
student.prototype.is18=function(){
    return this.age >= 18
}
student.prototype.sings=function(){
    return 'hello world'
}

const user1=student('Ankit jain',24,'ankitjain@gmail.com','is address')
console.log(user1)
const about=user1.about()
console.log(about)
const is18=user1.is18()
console.log(is18)