var user4 = {
    name: 'John',
    email: 'Boluwatife@gmail.com',
    address: 'Lagos',
    isSubscribed: true,
    startTrail: function () {
        return "".concat(this.name, " has started a trail");
    },
    getCoupon: function (name, value) {
        return 20;
    }
};
console.log(user4)
