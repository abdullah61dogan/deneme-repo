var ad=prompt('Adınızı giriniz: ');
var soyad=prompt('Soyadınızı giriniz: ');
var yas=prompt('Yaşınızı giriniz: ');
var cinsiyet=prompt('Cinsiyetinizi giriniz: ');
var sınav1=prompt('İlk sınav notunuzu giriniz: ');
var sınav2=prompt('İkinci sınav notunuzu giriniz: ');
var ort= (Number(sınav1) + Number(sınav2)) / 2 ;
console.log('Sınav not ortalamanız:'+ort);