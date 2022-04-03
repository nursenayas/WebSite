
console.log('**************** STRİNGS ***************');

// strings
const firstName = "Nurşen";
const lastName = "Ayas";
let hobbies = "sinema spor kitap yazılım";
const age = 25;
let val2;

// string concatenation

val2 = firstName + " " + lastName;
val2 = "Nurşen";
val2 += " Ayas";

val2 =
  "Beim adım " +
  firstName +
  " " +
  lastName +
  " ve yaşım " +
  age +
  "İstanbul'da yaşıyorum.";

// string concat
val2 = firstName.concat(" ", lastName);

//string uppercase - lowercase
val2 = val2.toUpperCase(); //harfleri büyüğe çevirir
val2 = val2.toLowerCase(); //harfleri küçüğe çevirir

//string replace
val2 = "   " + val2.replace("nurşen", "emine") + "   "; //nurşen adını emine ye  çevirir

//trim
val2 = val2.trim(); //boşlukları kaldırır.

//substring
// val2=val2.substring(0,5); //index aralığındaki harfleri alır.

//slice
// val2=val2.slice(2); //belirlenen indexten sonraki harfleri alır.

// val2 = val2.indexOf('ayas');
// val2 = val2[0];

//string length
// val2 = val2.length;

val2 = hobbies.split(" ");

console.log(val2);
console.log(typeof val2);
