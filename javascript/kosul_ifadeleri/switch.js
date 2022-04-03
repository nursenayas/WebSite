console.log('**************** SWİTCH ***************');

//switch statements

let category = "telefon";

/* switch (category) {
  case "telefon":
    console.log("telefon kategorisi");
    break;
  case "bilgisayar":
    console.log("bilgisayar kategorisi");
    break;

  default:
    console.log("yanlış kategori");
}  */

let day;

/* switch (new Date().getDay()) {
  case 0:
    day = "Pazar";
    break;

  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;
}

console.log(`Bugün günlerden ${day}`); */

/*
switch (new Date().getDay()) {
  

  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    day = "Hafta İçi";
    break;

  case 0:
  case 6:
    day = "Hafta Sonu";
    break;
}

console.log(`Bugün ${day}`);
*/

const yas = 25;
const ad = "Nurşen";

switch (true) {
  case yas >= 0 && yas <= 12:
    console.log(`${ad} is a child`);
    break;
  case yas >= 13 && yas <= 19:
    console.log(`${ad} is a teaneger`);
    break;
  default:
    console.log(`${ad} is an adult`);
}
