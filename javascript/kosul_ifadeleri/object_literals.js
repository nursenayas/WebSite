console.log('**************** OBJECT LİTERALS ***************');

let val;
let person = {
  firstName: "Çınar",
  lastName: "Ayas",
  age: 7,
  hobbies: ["music", "game"],
  adress: {
    city: "İstanbul",
    country: "Türkiye",
  },
  getBirthYear: function () {
    return 2018 - this.age;
  }
};
val = person;
val = person.firstName;
val = person.lastName;
val = person["firstName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.adress;
val = person.adress.city;
val = person.adress["city"];
val = person.getBirthYear();

let people = [
  { firstName: "Çınar", lastName: "Turan" },
  { firstName: "Sema", lastName: "Ayas" },
  { firstName: "Ayşe", lastName: "Turan" }
];

val = people[2];
val = people[2].firstName;

for (let i = 0; i < people.length; i++) {
  console.log(people[i].firstName);
}



// console.log(val);
// console.log(typeof people);
