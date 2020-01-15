const square = function(x) {
    return x * x; 
};
console.log(square(8)); 

const divide = (num, denom) => {
    return num/denom; 
};
console.log(divide(3,1))

// Arrow function expression syntax: 
const divideArrow = (num, denom) => num/denom; // implicitly returned
console.log(divideArrow(4,2));


const fullName = 'Andrw Yang'; 


const getFullName = (name) => {
    if (name) {
        return name.split(' ')[0]
    }
};
console.log(getFullName("Andrew Yang"))

const getFullNameArrow = (name) => name ? name.split(' ')[0]:"";
console.log(getFullNameArrow("Andrw Yang"))

// arguments object: no longer bound with arrow functions
const add = function (a,b) { 
    return a + b
};


// this: no longer bound with arrow functions 