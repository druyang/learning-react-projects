// const square = function(x) {
//     return x * x; 
// };

// console.log(square(8)); 

// const divide = (num, denom) => {
//     return num/denom; 
// };
// console.log(divide(3,1))

// // Arrow function expression syntax: 
// const divideArrow = (num, denom) => num/denom; // implicitly returned
// console.log(divideArrow(4,2));


// const fullName = 'Andrw Yang'; 


// const getFullName = (name) => {
//     if (name) {
//         return name.split(' ')[0]
//     }
// };
// console.log(getFullName("Andrew Yang"))

// const getFullNameArrow = (name) => name ? name.split(' ')[0]:"";
// console.log(getFullNameArrow("Andrw Yang"))

// // arguments object: no longer bound with arrow functions
// const add = function (a,b) { 
//     return a + b
// };


// // ES5
// const addOne = function(a,b){
//     console.log(arguments);
//     return a+b;
// };
// console.log(add(1,2,3));

// // ES6 
// const addTwo = (a,b) => {
//     console.log(arguments);
//     return a+b;
// };
// console.log(add(1,2,3));

// ES5 - this keyword
const user = {
    name: 'Andrw',
    cities: ['Eden Prairie', 'Hanover'],
    printPlacesLived() { // Syntax for objects  
        console.log(this.name);
        console.log(this.cities); 
        this.cities.map((city) => {
            return city; 
        }); 
        // can't access this.name in ES5 but with arrow functions will run this in context it was created in 
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        });
    }

};
user.printPlacesLived();

// Challenge area

const multiplier = {
 // numbers - Array of numbers to multiply
 numbers: [1,2,3],
 multiplyBy: 3,
 multiply(){
    return this.numbers.map((num) => 
        num*this.multiplyBy
    );
 }
};
console.log(multiplier.multiply());