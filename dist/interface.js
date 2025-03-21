"use strict";
const user4 = {
    name: 'John',
    email: 'Boluwatife@gmail.com',
    address: 'Lagos',
    isSubscribed: true,
    githubtoken: 'hitesh',
    startTrail() {
        return `${this.name} has started a trial`;
    },
};
console.log(user4);
const user5 = {
    name: 'John',
    email: 'Boluwatife@gmail.com',
    address: 'Lagos',
    isSubscribed: true,
    githubtoken: 'hitesh',
    role: 'Admin',
    startTrail() {
        return `${user4.name} has started a trial`;
    },
};
console.log(user4);
//# sourceMappingURL=interface.js.map