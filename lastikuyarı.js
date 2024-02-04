// Araba lastik uyarısı

let lastik = Number(prompt("Kaç adet sorunlu lastik var?"));
let sorun = prompt("Lastiklerin sorununu yazınız (havasıindi/patlak) ");



if((lastik == 1 && sorun == "havasıindi")) {
    alert("Sürmeye devam et")
}
else if(lastik == 1 && sorun == "patlak"){
    alert("Yavaşla")
}
else if(lastik == 2 && sorun == "patlak"){
    alert("Aracı durdur")
}
else if(lastik == 2 && sorun == "havasıindi"){
    alert("Lastiklerin havasını şişir")
}
