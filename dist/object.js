"use strict";
function addTwo(a, b) {
    return a + b;
}
addTwo(2, 3);
function greeters(name) {
    return 'Hello' + name;
}
greeters('John');
function signUp(name, password, isPaid) {
    if (name && isPaid && password.length > 8) {
        console.log('User signed up');
    }
    else {
        console.log('Error signing up');
    }
}
signUp('John', 'pass', true);
const loginUser = (name, password, isPaid = false) => {
    if (name && isPaid && password.length > 8) {
        console.log('User signed up');
    }
    else {
        console.log('Error signing up');
    }
};
loginUser('John', 'pass');
function createUser() {
    return { name: 'matty', isActive: true };
}
console.log(createUser);
const customerInfo = (user) => {
    return {
        name: user.name,
        occupation: user.occupation,
        phoneNo: user.phoneNo,
        isActive: user.isActive
    };
};
const user = {
    name: "Ade",
    occupation: "Banker",
    phoneNo: "08023486812",
    isActive: false
};
console.log(customerInfo(user));
function logPoint(p) {
    console.log("This is the corrdinate of the point x" + p.x);
    console.log("This is the corrdinate of the point y" + p.y);
}
logPoint({ x: 3, y: 4 });
function add(a, b) {
    return a + b;
}
add(2, 3);
//# sourceMappingURL=object.js.map