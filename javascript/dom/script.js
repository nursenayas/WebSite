//console.log('**************** Document object Model ***************');

// let val;
// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2].getAttribute("src");

// console.log(val);

// Selecting Elements
//console.log('**************** Single Elements ***************');
//tex elemet seçerken 'document.getElementById()'

/*
let val;


val = document.getElementById('header');
val = document.getElementById('header').id;
val = document.getElementById('header').className;

val = document.getElementById('header');
//val = val.id;
// val = val.className;


val.style.fontSize='45px';
val.style.color='red';
val.style.fontWeight='bold';
//val.style.display='none';

val = document.getElementById('header').innerText='my ToDo App';
val = document.getElementById('header').innerText='<b>my ToDo App</b>';
val = document.getElementById('header').innerHTML='<b>my ToDo App</b>';

console.log(val);

*/

// document.querySelector()
/*
let val;

console.log(document.querySelector("#header"));
console.log(document.querySelector(".card-header"));
console.log(document.querySelector("div"));
document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(2)").style.color = "green";
document.querySelector("li:nth-child(3)").textContent = "task item";
document.querySelector("li").className =
  "list-group-item list-group-item-primary";
document.querySelector("li:nth-child(3)").classList.add("active");

console.log(val);

*/

//console.log('**************** Multiple Elements ***************');
// class name
// document.getElementsByClassName()

/*
let val;
 val = document.getElementsByClassName('list-group-item');
// val = document.getElementsByClassName('list-group-item')[0];
//val = val[2];


val[1].style.color='blue';
val[1].style.fontSize='25px';
val[2].textContent='new item';


for(let i=0; i<val.length; i++){
    console.log(val[i].style.color='red');
    console.log(val[i].textContent='new item');
}

*/

// document.getElementsByTagName()
/*
val = document.getElementsByTagName('li');
val = document.getElementById('task-list').getElementsByTagName('a');
*/

// document.querySelectorAll()
/*
val = document.querySelectorAll('li');

val.forEach(function(item,index){

item.textContent=`${index} - hello`;
});




val = document.querySelectorAll('li:nth-child(odd)');
val.forEach(function(item){
item.style.background = '#ccc';
});
console.log(val);
*/

//Traversing the Dom
/*
let val;
let list = document.querySelector(".list-group");

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //text
val = list.childNodes[1].nodeType; //element

val = list.children;
val = list.children[0];
val = list.children[2];
val = list.children[2].textContent = "new item";
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.children[0].nextSibling;
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;
// console.log(val);



for (let i = 0; i < list.childNodes.length; i++) {
  if (list.childNodes[i].nodeType === 3) {
    console.log(list.childNodes[i]);
  }
}

*/






