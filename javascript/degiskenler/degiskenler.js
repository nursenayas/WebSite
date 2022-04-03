console.log('**************** DEĞİŞKENLER ***************');

// console.log("Merhaba");
// console.log(1234);
// console.log(true);
// console.log([1,2,3,4]);
// console.error("hata");
// console.warn("bir uyarı oluştu");


// console ekranını temizler
// console.clear();

  // *****************************
  //Ders 2: Değişkenler

// var age;
// console.log(age);

// age=20;
// console.log(age);

// var fullname='nursen ayas';
// console.log(fullname);

// fullname='emine ayas';
// console.log(fullname);

  // değişken tanımlama kuralları

   //sayısal ifade ile başlayamaz
// var yas1;
// var _yas2;
// var $yas3;

  //komut isimleriyle tanımlama yapılamaz
  //birden fazla kelime

// var ad='nurşen';
// var soyad='ayas';

// var ad_soyad='Nurşen Ayas';
// var adSoyad="Emine Ayas";

    //case sensitive (büyük küçük harf duyarlılığı)

// var adSoyad='Emine';
// var AdSoyad='Ayas';

// console.log(adSoyad);
// console.log(AdSoyad);

   // var, let, const

// let city='Batman';
// console.log(city);

// const email='nursen@gmail.com';
// console.log(email);

// email='ayas@gmail.com';
// console.log(email);

    // *****************************
    //Ders 3: Değişken Tipleri

   //  primitive types
   // string
// let firstname='Nurşen';

 // number
// let age = 22;
// let money = 100.5;

 // boolean
// let isActive = true;

  // null
// let job = null;

  // underfined
// let car;

// console.log(typeof car);



   // Reference Types - objects
  // Array
// let names=['Emine', 'nursen', 'ayas'];

  //Object
// let adress = {
//     city:'Kocaeli',
//     country:'Türkiye'
// }

   //function

// var calculateAge = function(){

// return 0;

// };
// console.log(typeof calculateAge);

   // *****************************
   //Ders 4: Tür dönüşümleri

let val;

// number to string
val = String(10);

// bool to string
val = String(true);

// date to string
val = String(new Date());

//array to string
val = String([1, 2, 3, 4]);

// toString
val = (10).toString();
val = false.toString();

// string to number
val = Number("10");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("a");
val = Number([1, 2, 3]);

// parseInt
// parsFloat

val = parseInt("40");
val = parseInt("10.5");
val = parseFloat("10.5");

console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));
