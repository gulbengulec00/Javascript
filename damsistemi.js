
// Damsız almama sistemi

let kadın = Number(prompt("Lütfen kadın sayısını giriniz:"));
let erkek = Number(prompt("Lütfen erkek sayısını giriniz:"));

if(kadın>=2){
    if(kadın<erkek){
        alert("İçeriye Giremezsiniz!");
    }
    else{
        alert("İçeriye Girebilirsiniz!");
    }
}
else{
    alert("İçeriye Giremezsiniz!");
} 

