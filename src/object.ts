//Note: When using a function it mandated to indicate the data type of the return value of the function. i.e ANY type is not allowed.//

// number //
function addTwo(a: number, b: number): number {
    return a + b;
}

addTwo(2, 3);


// string//

function greeters(name: string){
    return 'Hello' + name;
}

greeters('John');



function signUp (name:string, password:string, isPaid : boolean): void {

    if(name && isPaid && password.length > 8){
        console.log('User signed up')
    }else{
        console.log('Error signing up')
    }
}


signUp('John', 'pass', true)


const loginUser = (name: string, password: string, isPaid: boolean = false) => {
    if(name && isPaid && password.length > 8){
        console.log('User signed up')
    }else{
        console.log('Error signing up')
    }
}

loginUser ('John', 'pass')


function createUser():{name:string, isActive: boolean}{
    return{name:'matty', isActive:true}
}


console.log(createUser)


type User = {
    name: string,
    occupation: string,
    phoneNo: string,
    isActive: boolean,
}

const customerInfo = (user: User) => {
    return {
        name: user.name,
        occupation: user.occupation,
        phoneNo: user.phoneNo,
        isActive: user.isActive
    };
}

const user = {
    name: "Ade",
    occupation: "Banker",
    phoneNo: "08023486812",
    isActive: false
};

console.log(customerInfo(user));


type Points ={
    x: number,
    y: number,
}

function logPoint(p: Points){
    console.log("This is the corrdinate of the point x" + p.x) 
    console.log("This is the corrdinate of the point y" + p.y)
}

logPoint({x: 3, y: 4})



type New = number;

function add(a: New, b: New): New{
    return a + b;
}

add(2,3)


//Type and intersection//

type CardNumber = {
    cardNumber: string;
}

type CardHolder = {
    cardHolder: string;
}


type CardInfo = CardNumber & CardHolder;