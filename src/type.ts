let age:number = 12;
if(age < 50){
    age+=10;
    console.log(age);
}
// ENUM DATA TYPE//
const enum Size {Small=1, Medium, Large}

const mySize:Size = Size.Large;

console.log(mySize); // 3

/*

const Small = 1
const Medium =2
const Large =3

*/

function CalculateTax(income:number):number{
    if(income <= 10000){
        return income * 0.1;
    }
    return income * 0.2;
}

// OBJECT DATA TYPE//

let employee2:{readonly id:number, name:string, retire:(date:Date) => void } = {id:1, name:'mosh' ,retire:(date:Date) => console.log(date)} 

// Type advance  DATA TYPE//
type Employee ={readonly id:number, name:string, retire:(date:Date) => void } 

let employee :Employee= {id:1, name:'mosh' ,retire:(date:Date) => console.log(date)} 
 
 
//Union type //
const kgToLb =(weight : number | string): number => {
    if(typeof weight ===  'number'){
        return weight * 0.5;
    }else

    return parseInt(weight) * 2.0
}

kgToLb(10)


// Intersection//

type Draggable = {
    drag: () => void;
}

type Resizable ={
    resize: () => void
}


type UiWidget = Draggable & Resizable;


let textbox :UiWidget ={
    drag: () => {},
    resize: () => {}
}

// literal

type Quantity = 50 | 100;

let quantity: Quantity = 50;


type Metric = 'cm'| 'inches';
let metric:Metric = 'cm';


// null and undefined

function greet (name: string | null | undefined){
    if(name){
        console.log(name.toUpperCase)
    }else{
        console.log('Hola!!!')
    }
}

greet('John'); 


// optional chaining

type Customer = {
    birthday: Date
}


function getCustomer(id:number): Customer | null {
    return id === 0 ? null : {birthday : new Date()}
};

let  customer = getCustomer(0);

console.log(customer?.birthday)