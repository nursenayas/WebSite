console.log('**************** NUMBERS ***************');

// numbers
let val;

//val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('a10a');
// val = isNaN('10');
// val = isNaN('a10');

var num = 10.12456789;
val = num.toPrecision(5); //basamak sayısı
val = num.toFixed(2); //virgülden sona basamak sayısı
val = Math.PI;
val = Math.round(2.8); // sayıyı yuvarlama
val = Math.ceil(2.1); //herzaman üste yuvarlanır.
val = Math.floor(2.8); //herzaman aşağı yuvarlanır.
val = Math.sqrt(64); //Karekök hesaplar
val = Math.pow(2, 3); //2 üssü 3 işlemi yapar.
val = Math.abs(-100); //mutlak değer
val = Math.min(2, 5, 8, 7); //en küçük eleman
val = Math.max(1, 4, 5, 3, 8); //en büyük elemanı verir.
val = Math.floor(Math.random() * 10); // 0 ile 10 arası random sayı
val = Math.floor(Math.random() * 100 + 1); // 1 ile 100 arası random sayı

console.log(val);
console.log(typeof val);
