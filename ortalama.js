let vize1 = Number(prompt("Lütfen 1. vize notunuzu giriniz:"));
let vize2 = Number(prompt("Lütfen 2. vize notunuzu giriniz:"));
let final = Number(prompt("Lütfen final notunuzu giriniz:"));
let ortalama = (((vize1+vize2)/2)*0.4)+(final*0.6);

/* if(ortalama>=50){
    alert("Geçtiniz! Ortalamanız" +ortalama );
}
else{
    alert("Kaldınız! Ortalamanız " +ortalama );
} */


/* if(ortalama >= 50 && final >= 50){
    alert("Geçtiniz! Ortalamanız" +ortalama );
}
else{
    alert("Kaldınız! Ortalamanız " +ortalama );
} */


if(ortalama >= 50 || final >= 70){
    alert("Geçtiniz! Ortalamanız" +ortalama );
}
else{
    alert("Kaldınız! Ortalamanız " +ortalama );
}