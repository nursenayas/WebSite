//Local storage => tarayıcı kapansa bile bilgiler gitmez.

let val;

//set item
const firstName = localStorage.setItem('firstName','Nurşen');
const lastName = localStorage.setItem('lastName','Ayas');
let hobies = ['sinema','araba','gezmek'];


//get item
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');


//remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');


//clear => bütün elemanları siler
// localStorage.clear();


//set array to storage
localStorage.setItem('hobies',JSON.stringify(hobies));



val= JSON.parse(localStorage.getItem('hobies'));


console.log(val);

console.log(localStorage);



//session storage => tarayıcı kapansa bilgiler gider.
/*
const city = sessionStorage.setItem('city','Kocaeli');
const country = sessionStorage.setItem('country','Türkiye');

 console.log(sessionStorage);
 */