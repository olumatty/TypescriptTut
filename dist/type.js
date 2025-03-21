"use strict";
let age = 12;
if (age < 50) {
    age += 10;
    console.log(age);
}
const mySize = 3;
console.log(mySize);
function CalculateTax(income) {
    if (income <= 10000) {
        return income * 0.1;
    }
    return income * 0.2;
}
let employee2 = { id: 1, name: 'mosh', retire: (date) => console.log(date) };
let employee = { id: 1, name: 'mosh', retire: (date) => console.log(date) };
const kgToLb = (weight) => {
    if (typeof weight === 'number') {
        return weight * 0.5;
    }
    else
        return parseInt(weight) * 2.0;
};
kgToLb(10);
let textbox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let metric = 'cm';
function greet(name) {
    if (name) {
        console.log(name.toUpperCase);
    }
    else {
        console.log('Hola!!!');
    }
}
greet('John');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
;
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=type.js.map