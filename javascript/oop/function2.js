const myfunc={
    about : function(){
        console.log(`student name is ${this.firstname} and age is ${this.age}`)
    },
    is18 : function(){
        return this.age >= 18
    }
}
const student=function(firstname,lastname,age,email,address,about,is18){
    const User=Object.create(myfunc)
    User.firstname=firstname
    User.lastname=lastname
    User.age=age
    User.email=email
    User.address=address
    return User

}  
const user1=student('ankit','jain',24,'ankit@gmail.com','is address')
console.log(user1)
const about=user1.about()
console.log(about)