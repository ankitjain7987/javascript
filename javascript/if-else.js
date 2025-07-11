// let age = 16;
// if (age >=18){
//     console.log('you ar adult')

// }else
// {
//     console.log('you are not adult')}

// let num =12;
// if (num%2 ==0){
//     console.log('even number')
// }else{
//     console.log('odd number')
// }


// let marks = 60;

// if (marks <=100 && marks >=90){
// console.log('A+')
// }else if(marks >=90 && marks >=80){
//     console.log('A')
// }else if(marks >=80 && marks >=70){
//     console.log('B')
// }else if(marks >=70 && marks >=60){
//     console.log('C')
// }else if(marks >=60 && marks >=50){
//     console.log('D')
// }else if(marks >= 50 && marks >=40){
//     console.log('E')
// }else{
//     console.log('Fail')
// }


// let name='Ankit';
// let age = 22;

// if (name[0]==='A' && age >=18){
//     console.log('you name start a  and your age 18+');
// }else{
//     console.log('you are child');
// }

let winNumber = 20;
let guess = +prompt('guess number');
if (guess === winNumber){
    console.log('you win')
}else{
    if(guess< winNumber){
        console.log('too low')
    }else{
        console.log('too high')
    }
    console.log('try again')
    
}