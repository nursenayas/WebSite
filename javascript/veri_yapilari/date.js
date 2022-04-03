
console.log('**************** DATE ***************');

//Date Object
let d = new Date();
let birthday = new Date(1997,1,2);

// set methodes
d.setDate(15);
d.setFullYear(2020);
d.setHours(12);
d.setSeconds(25);
d.setMinutes(25);
d.setMonth(5);


// get methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());


console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDay() - birthday.getDay());

console.log(d);
console.log(typeof d);
