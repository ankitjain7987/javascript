function student(firstname,lastname,age,email,address,about,is18){
    const User={}
    User.firstname=firstname;
    User.lastname=lastname;
    User.age=age;
    User.email=email;
    User.address=address;
    User.about=function(){
        console.log(`student name is ${this.firstname} and age is ${this.age}`)
    }
    User.is18=function(){
        return this.age >= 18
    }
    return User
}

const User1=student('ankit','jain',22,'ankit@gmail.com','is address')
console.log(User1)
const is18 =User1.is18()
console.log(is18)
const about=User1.about()
console.log(about)