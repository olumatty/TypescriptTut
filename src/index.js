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
// ENUM DATA TYPE//
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
