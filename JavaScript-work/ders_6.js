var k_username="guest";
var k_password="12345";
var log=false;

while (log==false)
{
    var username= prompt("Kullanıcı adınızı giriniz:");
    var password= prompt("Şifrenizi giriniz:");

    if ((k_username == username) && (k_password == password))
    {
        console.log("Giriş yaptınız :)");
        log=true;
    }
    else
    {
        console.log("Kullanıcı adı veya şifre hatalı!");
    }
}