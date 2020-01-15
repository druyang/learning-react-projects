var nameVar = "Andrw"; 
nameVar = "Yang"; // Reassign var variables 
var nameVar = "Andru"; // ReDEFINE var variable 
console.log('nameVar', nameVar);

let nameLet = 'Andrew'; 
nameLet = 'Yang'; // can reassign
// CANT redefine 
console.log('Let',nameLet);

const nameConst = 'Kai'; 
console.log('Const', nameConst); 
// NEITHER redefine nor reassign 


function getPetName(){
    var petName = 'Hal'; //var, const, and let are FUNCTION SCOPED 
    return petName;
}

console.log(getPetName());

// Block level scoping: 
// let and const are block level scoped

let firstName; // scoped to where it's created 

var fullName = 'Andrw Yang';
if (fullName) { 
    firstName = fullName.split(' ')[0]; 
    var lastName = fullName.split(' ')[1];
    console.log(firstName);
}

console.log(lastName); 
console.log(firstName);

