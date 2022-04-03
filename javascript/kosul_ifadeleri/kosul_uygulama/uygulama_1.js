console.log('**************** KOŞUL UYGULAMASI 1 ***************');

var trafigeCikis = new Date("04/20/2020");
trafigeCikis.setHours(0, 0, 0, 0);
var trafiktekiMs = Date.now() - trafigeCikis.getTime();
var trafiktekiGun = Math.floor(trafiktekiMs/(1000*60*60*24));


if(trafiktekiGun<=365){
console.log('1.servis bakım süreniz geldi');
}else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
    console.log('2.servis bakım süreniz geldi');

}else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
    console.log('3.servis bakım süreniz geldi');

}else{
    console.log('bilinmeyen süre');

}



console.log(trafiktekiGun);
