// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

var musAdi = "Nurşen";
var musSoyadi = "Ayas";
var fullName = "Nurşen Ayas";
var musId = "12122255521";
var toplam = 205.6;
var musCinsiyet = false; //erkek true, kadın false

//object
var musAdres = {
  city: "İstanbul",
  district: "Küçükçekmece",
  body: "Kanarya mah. No:55",
}

//array
var musHobi = ['sinema','Masa Tenisi', 'Voleybol'];


// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
var order1=Number('100');
var order2=Number('150');
var siparisToplam = order1 + order2;
console.log(siparisToplam);

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
var order3=Number('100.2');
var order4=Number('150.5');
var siparisToplam2 =order3 + order4;
console.log(siparisToplam2);


// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.
var order4=parseInt('100.2');
var order5=parseInt('150.5');
var siparisToplam3 = order4 + order5;
console.log(siparisToplam3);


// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.
const yearOfBirth = 1997; //cons : başka değer atanamaz sabit kalır.
console.log(new Date().getFullYear()-yearOfBirth);



// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.
let course = 'Modern Javascript Kursu';
console.log(course.length);
