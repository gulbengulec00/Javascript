var a =  Number(prompt("Bir sayı giriniz"));
var b =  Number(prompt("Bir sayı giriniz"));
var islem = Number(prompt("Yapmak istediğiniz işlemi seçiniz (1/2)"));
var toplam;

function toplama (a,b){
    toplam = a+b;
    alert(toplam)
}
function çıkarma (a,b){
    cikar = a-b;
    alert(cikar)
}

function sonuc (a,b){
    if(islem==1){
        toplama(a,b)
    }

    else if(islem==2){
        çıkarma(a,b)
    }
    else{
        alert("Lütfen doğru bir veri giriniz")
    }

}

sonuc(a,b)