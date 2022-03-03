print("-Lütfen öğrenciniszin yaşını giriniz-")
ogrenci_yas = input("Öğrencinin yaşını giriniz!")
ogrenci_adi = input("Öğrencinin adını giriniz!")
anasinifi_yasi = 6

if      int(ogrenci_yas) < (anasinifi_yasi):
    print("Öğrenciniz "+ ogrenci_adi+"," " 5anasınıfı yaşına henüz gelmedi.")
elif    int(ogrenci_yas) == anasinifi_yasi:
    print("Öğrenciniz "+ ogrenci_adi+"," " anasınına uygun.")
else:
   print("Öğrenciniz "+ ogrenci_adi+"," " ana sınıfı yaşın geçti.")