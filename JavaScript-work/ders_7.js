var personel= [
    {
    ad:"Ali",
    soyad:"Yilmaz",
    cinsiyet:"Erkek",
    telefon:"0262333333",
    adres:"izmit Kocaeli",
    meslek:"bilgisayar mühendisi",
    diller:["ingilizce","almanca"],
    hobiler:["sinema","spor","kitap okumak"]
    },
    {
        ad:"Mehmet",
        soyad:"Yilmaz",
        cinsiyet:"Erkek",
        telefon:"0262333333",
        adres:"izmit Kocaeli",
        meslek:"elektironik mühendisi",
        diller:["ingilizce","japonca"],
        hobiler:["sinema","spor","kitap okumak"]
        },
        {
            ad:"Pınar",
            soyad:"Yilmaz",
            cinsiyet:"Kadın",
            telefon:"0262333333",
            adres:"izmit Kocaeli",
            meslek:"Personel Müdürü",
            diller:["ingilizce","almanca"],
            hobiler:["sinema","spor","kitap okumak"]
            }    
];

personel.forEach(function(personel){
    console.log("**********************");
    console.log("-"+personel.ad+' '+personel.soyad+"-");
    personel.diller.forEach(function(dil){
        console.log(dil);
    })
})