const student=function(name,age,email,address){
    this.name=name
    this.age=age
    this.email=email
    this.address=address
}
student.prototype.about=function(){
    // return `${this.name} and ${this.age}`
    console.log(this.name , this.age)
}
student.prototype.is18=function(){
    return this.age>=18
}
const user1=new student('ankit jain' ,24,'ankit@gmail.com','is address')

console.log(user1)
user1.about()
console.log(user1.is18());
