Git Komutları
****************************************************************************************************************
git config --list               (ayarlarla ilgili bilgileri liste halinde sıralar.)
git config user.name            (kullanıcı adını gösterir. Kısaca 'config' in ardından sorgulanan bilgiyi gösterir.)
code .                          (Git projesini Visual Studio Code'da  açıyor.)
pwd                             (içinde olunan klasörü gösterir. Konsol komutları.)
cd Desktop                      (belirtilen klasöre girer. Örn; masaüstü. Konsol komutları.)
cd ..                           (bir üst klasöre döner. Konsol komutları.)
ls -al                          (dizininde bulunduğun klasördeki dosyaları listeler.)
rm text.txt                     (belirtilen dosyayı siler. Konsol komutları.)
mv text.txt readme.txt          ('text' isimli dosyanın adını 'readme' olarak değiştirdi. Konsol komutları.)
git init                        (bulunulan klasöte boş bir Git repository kurar.)
git status                      (projenin durumunu belirtir. yapılan değişiklikler eklenen commitler vs.)
git status -s                   (status komutunun aynısıdır. Yalnızca 'short' kısa ibarelerle bildiri alır.)
git add .                       (bulunulan klasördeki her şeyi gite takip ettirir. Staging area'ya yönlendirir.)
git add index.html              (adı geçen dosyayı gite takip ettirir. Staging area'ya yönlendirir.)
git add -A                      (yapılan tüm değişiklikleri gite takip ettirir. Staging area'ya yönlendirir.)
git commit -m 'yorum'           (yapılan değişiklikler kayıt edilir, '' (tırnaklar) arasına yorum metni yazılır.)
git commit -am 'yorum'          (tek dosyadaki değişikliği hem add hem commit yapmamızı sağlar.)
touch text.txt                  (touch komutu bir dosya oluşturmak için kullanılır. Örn: text.txt)
git restore --staged text.txt   (commitlenen değişikliği Staging area'dan çalışma dizinine yani geri çeker.)
git restore text.txt            (Değişiklikler ilk haline geri gelir.)
git show                        (en son yapılan commiti gösterir.)
git log                         (tüm yapılan commitleri yeniden eskiye doğru gösterir.)
git log --oneline               (git log'un sade hali.)
git log -p -2                   (son iki commit görünür.)
git log --since=30minutes       (belirtilen zaman dilimindeki (dk,saat,gün,hafta,ay) değişiklikleri gösterir.)
git checkout 47a3ce8            (belirtilen log'a geri gelinir.)
git revert 47a3ce8              (belirtilen log'u iptal eder.), :x! (kaydet çık Visual Studio için sekmeyi kapat.)
git reset --soft 47a3ce8        (logların kendilerini siler sadece commit alanından silinir.)
git reset --mixed 47a3ce8       (logları staged alanından da siler sadece çalışma alanında kalır.)
git reset --hard 47a3ce8        (committen, stageddan ve çalışma dizininden geri döndürülür.)
{
    .gitignore                  repo tarafından takibi istenmeyen dosyalar burdadır. 
    touch .gitignore            komutuyla oluşturulur.
    touch log.txt               takibi istenmeyen dosyaya örnek olması için oluşturuldu.
            .gitignore dosyası içerisine "log.txt" yazılır. Böylece log.txt izlemeden muaf kalır.
            Tüm bir klasörün ignorelanmasını istiyorsak "klasöradı/" komutunu,
            tüm aynı uzantıya sahip dosyaların ignorelanmasını istiyorsak "*.xyz" komutunu 
            .gitignore dosyasının içerisinde satırlara yazmamız gerekmektedir.
            .gitignore dosyası proje başında oluşturulmalıdır. 
    *********************Aksi halde*********************
    git rm -r --cached .        komuduyla tüm cache izlemeden kaldırılır.
    git add .                   ile tekrar izlemeye tanıtılır.
    git commit -m 'yorum'       commit ile tekrar repoya alınır.
}
git branch -a                   (branchleri listeler.)
git branch htmlbranch           (htmlbranch adında bir branch oluşturur.)
git branch -d htmlbranch        (htmlbranch adlı branchi siler.)
git checkout htmlbranch         (htmlbranch adlı branch'e girilir.)
git checkout -b htmlbranch      (hem htmlbranch oluşturur hem içine girer.)
git merge htmlbranch            (htmlbranch'deki değişiklikleri birleştirecektir.
                                İstersek daha fazla branchi yan yana yazarak merge işlemine ekleyebiliriz.)
git push                        (yapılan commitler uzak repoya yüklenir.)
git clone https:link            (github'daki clone linki yada SSH linkiyle repoyu klonlar.)
git remote -v                   (bağlı olunan repo adresini belirtir.)
git fetch                       (uzak bağlantıdaki değişiklik kopyalanır ancak merge etmez yani yazmaz.)
git pull                        (git fetch + git merge ün yaptığı işi tek baına yapar.)
