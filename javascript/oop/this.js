const Student = function(name,age){
    this.name=name
    this.age=age

}
Student.prototype.about=function(){
    // return `${this.name} and ${this.age}`
    console.log(this.name , this.age)
}
const user1=new Student('ankit jain',24)
console.log(user1)
user1.about()