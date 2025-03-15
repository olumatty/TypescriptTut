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



function signUp (name:string, password:string, isPaid : boolean):void {

    if(name && isPaid && password.length > 8){
        console.log('User signed up')
    }else{
        console.log('Error signing up')
    }
}


signUp('John', 'pass', true)