'use strict';

var square = function square(x) {
    return x * x;
};
console.log(square(8));

var divide = function divide(num, denom) {
    return num / denom;
};
console.log(divide(3, 1));

// Arrow function expression syntax: 
var divideArrow = function divideArrow(num, denom) {
    return num / denom;
}; // implicitly returned
console.log(divideArrow(4, 2));

var fullName = 'Andrw Yang';

var getFullName = function getFullName(name) {
    if (name) {
        return name.split(' ')[0];
    }
};
console.log(getFullName("Andrew Yang"));

var getFullNameArrow = function getFullNameArrow(name) {
    return name ? name.split(' ')[0] : "";
};
console.log(getFullNameArrow("Andrw Yang"));
