console.log('**************** ARRAYS ***************');

let names = ["Nurşen", "emine", "ali"];
let years = [1997, 1995, 1999, 2010];
let mix = [
  "nurşen",
  "ayas",
  1997,
  null,
  undefined,
  ["sinema", "spor", "kitap"],
];

//// get array item

// console.log(names[0]);
// console.log(names[2]);

// //set array item
// names[0]='bilal';
// names[names.length]='melek';

// //add item
// years.push(1992);//sona ekler
// years.unshift(1993);//başa ekler

// //remove item
// years.pop();//sondaki elemanı siler
// years.shift();//baştaki elemanı siler

// //indexof
// let index = names.indexOf('ali');
// console.log('index '+index);

// //reverse
// names.reverse();//sondan başa sıralar

// //sort
// years.sort();//sıralar

// //concat
// let val= years.concat(names);
// console.log(val);

//splice
// names.splice(2,1,'seda');//2. elemandan sonra 1 eleman silinir ve onun yerine seda eklenir
// names.splice(0,1);//0. indexten itibaren 1 eleman siler

function over18(year) {
  let age = 2022 - year;
  return age >= 18;
}

//find
// let val = years.find(over18);//dizide ilk 18 yaşından büyük elemanı bulur.

//filter
let val = years.filter(over18); //dizide tüm 18 yaşından büyük elemanları bulur.

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);
