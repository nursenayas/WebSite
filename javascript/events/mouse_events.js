const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

//click event
/*
btn.addEventListener('click',eventHandler);
ul.addEventListener('click',eventHandler);
*/

/*

//double click
btn.addEventListener('dblclick',eventHandler);



//mouse down tıklama anında gerçekleşir
btn.addEventListener('mousedown',eventHandler);
//mouse up tıklama bırakıldığı anda gerçekleşir
btn.addEventListener('mouseup',eventHandler);




// mouseenter ul çerçevesi içinde olay gerçekleşir
ul.addEventListener('mouseenter',eventHandler);
//mouseleave ul çerçevesi dışında  gerçekleşir
ul.addEventListener('mouseleave',eventHandler);



// mouseover ul çerçevesi içinde olay gerçekleşir. nesnelerin alt elemanlarında çalışır.
ul.addEventListener('mouseover',eventHandler);
//mouseout ul çerçevesi içinde başka bir  elemana geçişte gerçekleşir.
ul.addEventListener('mouseout',eventHandler);

*/


//mouse move => mouse ul etiketinin üzerinde hareket ettiği her an gerçekleşir.
const h5=document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent=`Mouse X : ${event.offsetX } Mouse Y : ${event.offsetY }`;

}

