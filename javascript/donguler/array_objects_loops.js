console.log('**************** ARRAY OBJECTS LOOP ***************');

let cars = ["Bmv", "Mercedes", "Toyota"];
let people = [
  { firstName: "Nurşen", lastName: "Ayas" },
  { firstName: "ada", lastName: "Turan" },
  { firstName: "Çınar", lastName: "Ayas" },
];

/*
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
*/

//Objects
/*
for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
}
*/

// for-in
//arrays
/*
for(let i in cars){
  console.log(`index : ${i} value : ${cars[i]}`);
}
*/

//objects
/*
for(let i in people){

  console.log(`index : ${i} value : ${people[i].firstName}`);

}
*/

//foreach
//arrays
/*
cars.forEach(function(item){
console.log(item)

});
*/

//objects

/*
people.forEach(function(item){
    console.log(item.firstName)
    
    });
*/

// map : returns an array
/*
let val2 = people.map(function(item){
return item.firstName+' '+ item.lastName;
});

console.log(val2);
*/

let numbers = [1, 5, 6, 8, 10];

let num = numbers.map(function (n) {
  return n * n;
});

console.log(num);
