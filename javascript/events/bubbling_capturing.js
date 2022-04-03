// event bubbling => içten dışa doğru aktarım
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

/*
form.addEventListener("click", function (e) {
  console.log(form);
  e.stopPropagation(e);// event bubbling => içten dışa doğru aktarımı durdurur.
});
cardBody.addEventListener("click", function (e) {
  console.log(cardBody);
  e.stopPropagation(e);

});
card.addEventListener("click", function (e) {
  console.log(card);
  e.stopPropagation(e);

});
container.addEventListener("click", function (e) {
  console.log(container);
  e.stopPropagation(e);

});
*/

//Event Capturing => dıştan içe doğru aktarım
/*
form.addEventListener("click", function (e) {
    console.log(form);
    e.stopPropagation(e);// event bubbling => dıştan içe doğru aktarımı durdurur.
  },true);
  cardBody.addEventListener("click", function (e) {
    console.log(cardBody);
    e.stopPropagation(e);
  
  },true);
  card.addEventListener("click", function (e) {
    console.log(card);
    e.stopPropagation(e);
  },true);
  container.addEventListener("click", function (e) {
    console.log(container);
    e.stopPropagation(e);
  },true);

  */

/*
const deleteItems = document.querySelectorAll('.fa-times');
deleteItems.forEach(function(item){
item.addEventListener('click',function(e){
console.log(e.target);
})
});

*/

const ul = document.querySelector("ul");

ul.addEventListener("click", function (e) {
  if (e.target.className === "fas fa-times") {
    e.target.parentElement.parentElement.remove();
    e.preventDefault();
  }
});
