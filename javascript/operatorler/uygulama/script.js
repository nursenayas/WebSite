// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let canIndex;
let adaIndex;

const canKg = 70;
const adaKg = 50;

const canBoy = 1.70;
const adaBoy = 1.60;


canIndex = (canKg) / (canBoy*canBoy);
adaIndex = (adaKg) / (adaBoy*adaBoy);



console.log(adaIndex.toFixed(2),canIndex.toFixed(3));

let adaHigherIndex = adaIndex>canIndex;
let canHigherIndex = canIndex>adaIndex;

console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : "+adaHigherIndex);

console.log("Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : "+canHigherIndex);

let AdaZayif = (adaIndex>=0) && (adaIndex<=18.4);
let AdaNormal = (adaIndex>=18.5) && (adaIndex<=24.9);
let AdaKilolu = (adaIndex>=25) && (adaIndex<=29.9);
let AdaSisman = (adaIndex>=30) && (adaIndex<=34.9);

console.log("Ada zayıf :"+AdaZayif);
console.log("Ada'nın kilosu normal : "+AdaNormal);
console.log("Ada kilolu mu : "+AdaKilolu);
console.log("Ada şişman mı : "+AdaSisman);



let CanZayif = (canIndex>=0) && (canIndex<=18.4);
let CanNormal = (canIndex>=18.5) && (canIndex<=24.9);
let CanKilolu = (canIndex>=25) && (canIndex<=29.9);
let CanSisman = (canIndex>=30) && (canIndex<=34.9);

console.log("Can zayıf :"+CanZayif);
console.log("Can'nın kilosu normal : "+CanNormal);
console.log("Can kilolu mu : "+CanKilolu);
console.log("Can şişman mı : "+CanSisman);
