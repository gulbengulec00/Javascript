// Sayı tahmin oyunu


let sayi = 38;
let tahmin = Number(prompt("Lütfen bir sayı tahmin ediniz:"));



while(sayi!=tahmin ){
    alert("Tahmininiz yanlış!!");
    tahmin = Number(prompt("Lütfen bir sayı daha tahmin ediniz:"));
    
}



if(sayi==tahmin){
    alert("Tebrikler doğru bildiniz!!");
}