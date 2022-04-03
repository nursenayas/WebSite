var hesapA = {
  ad: "Nurşen ayas",
  hesapNo: "12345678",
  bakiye: 2000,
  ekHesap: 1500,
};

var hesapB = {
  ad: "Ada ayas",
  hesapNo: "32145654",
  bakiye: 3000,
  ekHesap: 2500,
};

function paraCek(hesap, miktar) {
  console.log(`Merhaba ${hesap.ad}`);

  if (hesap.bakiye >= miktar) {
    hesap.bakiye = hesap.bakiye - miktar;

    console.log("paranızı alabilirsiniz.");
  } else {
    var toplam = hesap.bakiye + hesap.ekHesap;

    if (toplam >= miktar) {
      if (confirm("Ek hesabınızı kullanmak istermisiniz?")) {
        console.log("paranızı alabilirsiniz.");
        var bakiye = hesap.bakiye;
        var ekhesap = miktar - bakiye;
        hesap.bakiye = 0;
        hesap.ekhesap = hesap.ekhesap - ekhesap;
      } else {
        console.log(
          `${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır. `
        );
      }
    } else {
      console.log("Bakiye yetersiz");
    }
  }
}

paraCek(hesapA, 2000);
paraCek(hesapA, 1000);
//paraCek(hesapB,3000);
