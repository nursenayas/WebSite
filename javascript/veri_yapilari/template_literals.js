console.log('**************** TEMPLATE LITERALS ***************');

// template literals

const fullName = "Nurşen Ayas";
const city = "İstanbul";
const yearOfBirth = 1997;

let val3;

val3 =
  "my name is " +
  fullName +
  " I'm " +
  (2022 - yearOfBirth) +
  " years old" +
  " and I live in " +
  city;

  //ternary operator
val3 = `my name is ${fullName} I'm ${
  2022 - yearOfBirth >= 18 ? "over 18 " : "under 18"
} years old and I live in ${city} `;

console.log(val3);
console.log(typeof val3);
