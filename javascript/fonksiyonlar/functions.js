console.log('**************** fUNCTİONS ***************');

function yasHesapla(dogumYili) {
  return 2022 - dogumYili;
}

let ageAda = yasHesapla(1997);
let ageEda = yasHesapla(2000);
let ageAli = yasHesapla(2010);

console.log(ageAda);
console.log(ageEda);
console.log(ageAli);

function EmekligeKacYil(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);

  let emeklilik = 65 - yas;

  if (emeklilik > 0) {
    console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı. `);
  } else {
    console.log("Zaten emekli oldunuz.");
  }
}

EmekligeKacYil(1997, "Ada");
EmekligeKacYil(1950, "Eda");
EmekligeKacYil(2010, "Ali");
