// Demo : Strings
var sentence =
  "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url =
  "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

// cümle kaç karakterlidir ?
console.log(sentence.length);

// kaç kelimeden oluşuyor ?
console.log(sentence.trim().split(" "));

// Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim());

// '-' karakterini silin.
console.log(sentence.replace("-", ""));

// url'nin içinden str kısmını çıkarınız.
var str = "http://";
console.log(url.substring(str.length));
console.log(url.slice(str.length));

// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith("http"));
console.log(url.startsWith("https"));

// url, '.com' ifadesini içeriyor mu?
console.log(url.indexOf(".com"));
console.log(url.includes(".com"));

// url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(
  url
    .toLowerCase() //bütün harfleri küçük hafre çevirir.
    .replace(/ /g, "-") //bütün boşlukları - çevirir.
    .replace(/ı/g, "i") //bütün ı hafleri i harfine dönüşür.
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
);
