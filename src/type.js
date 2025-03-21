var age = 12;
if (age < 50) {
    age += 10;
    console.log(age);
}
var mySize = 3 /* Size.Large */;
console.log(mySize); // 3
/*

const Small = 1
const Medium =2
const Large =3

*/
function CalculateTax(income) {
    if (income <= 10000) {
        return income * 0.1;
    }
    return income * 0.2;
}
// OBJECT DATA TYPE//
var employee2 = { id: 1, name: 'mosh', retire: function (date) { return console.log(date); } };
var employee = { id: 1, name: 'mosh', retire: function (date) { return console.log(date); } };
//Union type //
var kgToLb = function (weight) {
    if (typeof weight === 'number') {
        return weight * 0.5;
    }
    else
        return parseInt(weight) * 2.0;
};
kgToLb(10);
var textbox = {
    drag: function () { },
    resize: function () { }
};
var quantity = 50;
var metric = 'cm';
// null and undefined
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
var customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
