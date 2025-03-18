type Ussers ={
    name: string,
    id: number,
    isPresent: boolean
}

type Admins ={
    username:string,
    password: string,
    isPresent: boolean
}

let staff: Ussers | Admins = {
    name: 'John',
    id: 1,
    isPresent: true
}


console.log(staff)



staff={username:'admin', 'password':'admin', 'isPresent':true}
console.log(staff)
    


function printId (id: number | string){
    if(typeof id === 'string'){
        console.log(id.toUpperCase())
    }else{
        console.log(id + 2)
    }   
}

const data:(string | number)[] = [1, 'John', 2, 'Doe']
const data2:Array<string | number> = [1, 'John', 2, 'Doe']