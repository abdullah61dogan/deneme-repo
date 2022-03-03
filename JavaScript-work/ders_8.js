var x = ciftmi (prompt('Girdiğiniz sayı çift mi?'));
    console.log(x);

var y = faktoriyel (prompt('Faktoriyel hesaplanmasını istediğiniz sayıyı giriniz:'));
    console.log(y);

var z = ["a","b","c","d","e"];
    yazdir(z);

function ciftmi(x)          {
        if (x % 2==0)       {
        return true;        }
        else                {
        return false;       }
}

function faktoriyel(y)              {
        var sonuc = 1;
        for(var i =2;i<=y;i++)      {
            sonuc *= i ;
                                    }
        return(sonuc);
}

function yazdir(array)      {
        array.forEach(function(item){
        console.log(item);            
        })
}