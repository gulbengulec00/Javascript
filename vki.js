let kilo =  Number(prompt("Kilonuzu giriniz: (kg)"));
let boy =  Number(prompt("Boyunuzu giriniz: (m)"));
let yas =  Number(prompt("Yaşınızı giriniz:"));
let cinsiyet =  prompt("Cinsiyetinizi giriniz:");

let vki = kilo/(boy**2);


if(vki <= 18.5){
    alert("Düşük Kilolu")
}
else if((vki > 18.5 && vki <= 24.5)) {
    alert("Normal Kilolu")
}
else if(vki > 25 && vki <= 29.9){
    alert("Fazla Kilolu")
}
else if(vki > 30 && vki <= 40){
    alert("Obez")
}
else if(vki >= 40){
    alert("Aşırı Obez")
}

