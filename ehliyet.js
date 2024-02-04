

// Ehliyet sistemi


let yas = Number(prompt("Lütfen yaşınızı giriniz:"));

if(yas>18){
    alert("Siz daha ehliyet almadınız mı?");
}
else if( yas==18 ){
        alert("Ehliyet alabilirsiniz")
}
else if(yas <= 18){
    alert("Ehliyet alamazsınız")
}
