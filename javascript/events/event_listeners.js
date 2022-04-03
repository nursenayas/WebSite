// Event Listeners

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");

// tek kullanımlık tıklama fonksiyon
btn.addEventListener("click", function (e) {
  let val;
  val = e;
  val = e.target; //hangi butonun tıklandığını verir.
  val = e.target.id; //tıklanan objenin id bilgisini verir.
  val = e.target.classList; 
  val = e.type; 

  console.log(val);

  e.preventDefault(); // refresh olayını engeller.

});




// tek kullanımlık hover fonksiyon
/*
btn.addEventListener("mouseover", function (e) {
 
    val = e.type; 
  
    console.log(val);
  
  
  });

*/






// birden fazla kullanımlık fonksiyon
/*
btn.addEventListener('click', btnClick);
btn.addEventListener('click', btnClick2);
btn2.addEventListener('click', btnClick);

function btnClick(){
    console.log('btn clicked');
}
function btnClick2(){
    console.log('btn 2 clicked');
}

*/
