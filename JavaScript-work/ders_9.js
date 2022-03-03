var product = {
    name: 'Samsung S8',
    price: 3000,
    description: 'Özetlenmesini istediğiniz metni yazınız!: Bu telefon falanca iyi telefondur filanca iyi telefondur.',
    summary: function(){
        var ozetcumle=[];
        var maxKarakter = 20;
        var cumle = this.description;
if(maxKarakter>cumle.length){
    this.shortDescription = cumle;
}else{
    var kelimeler= cumle.split(' ');
    var toplamKarakter = 0;
    for(var i=0;i<kelimeler.length;i++){
    ozetcumle.push(kelimeler[i]);
    toplamKarakter+=kelimeler[i].length;
    if(toplamKarakter>maxKarakter){
        break;
    }
    }
}
    this.shortDescription = ozetcumle.join(' ')+('...');
    }
};
product.summary();
console.log(product);

function ozet(cumle,maxKarakter){
var ozetcumle=[];

if(maxKarakter>cumle.length){
    return cumle;
}else{
    var kelimeler= cumle.split(' ');
    var toplamKarakter = 0;
    for(var i=0;i<kelimeler.length;i++){
    ozetcumle.push(kelimeler[i]);
    toplamKarakter+=kelimeler[i].length;
    if(toplamKarakter>maxKarakter){
        break;
    }
    }
}
    return ozetcumle.join(' ')+('...');
}

/*var cumle = prompt('Özetlenmesini istediğiniz metni yazınız!');
console.log(ozet(cumle,20));*/