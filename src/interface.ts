interface Userss {
    name: string,
    age?: number,
    email: string,
    address: string,
    isSubscribed: boolean,
    startTrail():string,
    getCoupon(couponname:string, value:number):number
}

interface Userss{
    githubtoken?: string
}

//inheritance
interface Admin extends Userss{
    role: string
}

const user4 : Userss = {
    name: 'John',
    email: 'Boluwatife@gmail.com',
    address: 'Lagos',
    isSubscribed: true,
    githubtoken: 'hitesh',
    startTrail(){
        return `${user4.name} has started a trial`

    },
    getCoupon:(couponname:"hitesh", value:10) => {
        return 20;
}
}

console.log(user4)

const user5 : Admin = {
    name: 'John',
    email: 'Boluwatife@gmail.com',
    address: 'Lagos',
    isSubscribed: true,
    githubtoken: 'hitesh',
    role: 'Admin',
    startTrail(){
        return `${user4.name} has started a trial`

    },
    getCoupon:(couponname:"hitesh", value:10) => {
        return 20;
}
}

console.log(user4)


