var yas=prompt('yaşınızı giriniz:');
console.log('yas '+typeof yas);
if(yas>=18){
    console.log("ehliyet alabilirsiniz.");
}else if(yas<18){
    console.log("Ehliyet almak için " + (18 - (+yas)) + " yıl daha beklemelisiniz."); //(+yas) yerine Number(yas) kullanılabilir.
}else{
    console.log("Hatalı giriş yaptınız!")
}
console.log('yas '+typeof (yas));
var x = parseInt(yas, 10);
console.log('x '+x);
console.log('yas '+ yas);
console.log('yas '+typeof (yas));
console.log('x '+typeof (x));
var z = Number.parseInt(yas,10);
console.log('yas '+typeof (yas));
console.log('z '+typeof (z));