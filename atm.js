/*
 1-Bakiye ekranı
 2-Para Çekme
 3-Para Yatırma
 4-Çıkış

 */

 yeniSatir = "\r\n";
 let bakiye = 20000;

 let metin = "1-Bakiyem"+yeniSatir
 +"2-Para Çekme"+yeniSatir
 +"3-Para Yatırma"+yeniSatir
 +"4-Çıkış"+yeniSatir
 +"Geçerli bir değer giriniz."

//  alert(metin);

let secim =prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz : " +bakiye);
        break;
    case "2":
        let cekilecekMiktar = Number(prompt("Çekmek istediğiniz miktarı giriniz:"));   
        if(cekilecekMiktar<bakiye){
            bakiye = bakiye-cekilecekMiktar;
            alert("KALAN BAKİYE:"+bakiye);

        }else{
            alert("Girdiğiniz miktarda bakiyeniz bulunmamaktadır!");
        }
        break;
    case "3":
        let paraYatirma = Number(prompt("Yatıracağınız miktarı giriniz:"));
        bakiye= bakiye+paraYatirma;
        alert("Güncel bakiyeniz:"+bakiye);
        break;

    case "4":
        alert("Sistemden çıkış yapıldı.");
    
    default:
        alert("Lütfen geçerli bir tuşa basınız.");   



}