interface Userss {
    name: string,
    age?: number,
    email: string,
    address: string,
    isSubscribed: boolean,
    startTrail():string,
    getCoupon(couponname: string, value: number):number
}


const user4 : Userss = {
    name: 'John',
    email: 'Boluwatife@gmail.com',
    address: 'Lagos',
    isSubscribed: true,
    startTrail(){
        return `${this.name} has started a trail`

    },
    getCoupon(couponname:"hitesh", value: 10){
        return 20;
}
}

console.log(user4)


