let age:number = 12;
if(age < 50){
    age+=10;
    console.log(age);
}

const enum Size {Small=1, Medium, Large}

const mySize:Size = Size.Large;

console.log(mySize); // 3

/*

const Small = 1
const Medium =2
const Large =3

*/
// ENUM DATA TYPE//

function CalculateTax(income:number):number{
    if(income <= 10000){
        return income * 0.1;
    }
    return income * 0.2;
}

// OBJECT DATA TYPE//

let employee :Employee= {id:1, name:'mosh' ,retire:(date:Date) => console.log(date)} 


type Employee ={readonly id:number, name:string, retire:(date:Date) => void } 
 
 