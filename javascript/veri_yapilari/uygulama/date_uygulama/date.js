// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

let tarih = new Date();

console.log(tarih);
console.log(tarih.getDate());
console.log(tarih.getMonth());
console.log(tarih.getFullYear());



// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

var dtA = new Date('8/25/2021 14:50:10');
var dtB = new Date(2021,7,25,14,50,10);

console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz. 

var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);

console.log(dtC);

// iki tarih arasındaki geçen zamanı bulunuz.
var start = new Date('1/1/1990');
var end = new Date('1/1/1991');

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log('milisecond :'+milisecond);
console.log('saniye :'+saniye);
console.log('dakika :'+dakika);
console.log('saat :'+saat);
console.log('gun :'+gun);



// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.getMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1);
} 
annelerGunu.setDate(annelerGunu.getDate()+7);

console.log(annelerGunu);





// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date('8/9/1997');
var ageDifMs = Date.now() - birthday.getTime() ;
var ageDate =  new Date(ageDifMs);


console.log(ageDate.getFullYear() - 1970);
// console.log(birthday.getTime());
// console.log(Date.now());