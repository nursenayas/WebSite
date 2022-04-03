// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
var carModel = ["Bmw", "Mercedes", "Opel", "Mazda"];
//var carModel2 = new Array("Bmw", "Mercedes", "Opel", "Mazda");
console.log(carModel);

// Dizi kaç elemanlıdır ?
console.log(carModel.length);

// Dizinin ilk ve son elemanı nedir ?
console.log(carModel[0]);
console.log(carModel[3]);
console.log(carModel[carModel.length - 1]);

// "Renault" değerini dizinin sonuna ekleyin.
//carModel[4]="Renault";
carModel[carModel.length] = "Renault";
console.log(carModel.push("Toyota"));
console.log(carModel);

// "Seat" değerini dizinin başına ekleyin.
carModel.unshift("Seat");
console.log(carModel);

// "seat" değerini siliniz.
carModel.shift("seat");
console.log(carModel);

// "Toyota" değerini siliniz.
carModel.pop("Toyota");
console.log(carModel);

// Dizi elemanlarını ters çevirin
console.log(carModel.reverse());

// Dizi elemanlarını alfabetik olarak sıralayın.
console.log(carModel.sort());

// [1,2,5,80] dizisini sıralayın.
let siraliSayi = [1, 2, 5, 80, 15];
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log(siraliSayi.sort(compare));

// "Opel" değeri dizinin bir elemanımıdır ?
console.log(carModel);

console.log(carModel.indexOf("Opel"));
console.log(carModel.includes("Opel"));

// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.

var str = "Chevrolet,Dacia";
var carModel2 = str.split(",");
console.log(carModel2);

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
let birlesikDizi = carModel.concat(carModel2);
console.log(birlesikDizi);

// Oluşturulan diziden son 2 elemanı siliniz.

// console.log(birlesikDizi.pop(1));
//console.log(birlesikDizi.splice(6,2));
console.log(birlesikDizi.slice(6, 8));

console.log(birlesikDizi);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/
var studentA = ["Yiğit", "Bilgi", 2010];
var studentB = ["Sena", "Turan", 1999];
var studentC = ["Ahmet", "Turan", 1998];

var students = [studentA, studentB, studentC];

console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);

console.log(students);
