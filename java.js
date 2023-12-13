//Part1:Array Operations
console.log("Part 1: Array Operations");
let fruits=[];
 fruits.push("apple","banana","orange");
fruits.splice(0,1);
fruits.push("grape");
fruits[1]="pear";
console.log(fruits);

//Part 2: Object Operations
console.log("Part 2: Object Operations");
let person={};
person.name="John";
person.age=30;
person.city="New York";
delete person.age;
person.job="Engineer";
person.city="San Francisco"
console.log(person);


//Part 3:  Array of Objects Operations
console.log("Part 2: Array of Objects Operations");
let cars=[];
cars.push({make:"Toyota",model: "Camry",year: 2018}) ;
delete cars[0].make;
cars.push({
    make:"Honda"
   , model: "Civic"
   , year:2020}

)     ;    
cars[1].model="Accord";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

console.log(cars);





//OUTPUT:
// Part 1: Array Operations
// [ 'banana', 'pear', 'grape' ]
// Part 2: Object Operations
// { name: 'John', city: 'San Francisco', job: 'Engineer' }
// Part 2: Array of Objects Operations
// [
//   { model: 'Camry', year: 2018 },
//   { make: 'Honda', model: 'Accord', year: 2020 }
// ]