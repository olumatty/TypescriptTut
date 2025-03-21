"use strict";
let staff = {
    name: 'John',
    id: 1,
    isPresent: true
};
console.log(staff);
staff = { username: 'admin', 'password': 'admin', 'isPresent': true };
console.log(staff);
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id + 2);
    }
}
const data = [1, 'John', 2, 'Doe'];
const data2 = [1, 'John', 2, 'Doe'];
//# sourceMappingURL=union.js.map