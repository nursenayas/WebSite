console.log('**************** SCOPE ***************');


// **Global Scopes
var name = "Nurşen";
var age = 25;

function logName() {
  var name = "ada";
  var age = "10";
  console.log("function scope", name, age);
}

if (true) {
  var age = 30;

  console.log('Block scope',name,age);
}

console.log(age);

logName();
console.log(name);

// ** Local Scopes

//fonksiyonlar kendi scoplarını oluşturur.
//  **Block'lar yeni scope oluşturmaz.
// ES6 ile gelen let ve const block scope oluşturur.

console.log('*******************************');


if (true) {
    var model = 'Opel';
    let year = 2016;
    const color = 'white';
  
    console.log('Block scope',model,year,color);
  }

  console.log(model);
  //console.log(color);



  var i = 1;

  for(let i=0; i<10;i++){

    console.log('i',i)
  }

  console.log(i);