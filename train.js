// TASK D

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.

const checkContent = (text1, text2) => {
  // 2 parametrni uzunligi solishtirilyapti
  if(text1.length !== text2.length){
    return false;
    
  }
  // Hamma harfini kichkina harfaga o'zgartirilyapti
  let t1 = text1.toLowerCase();
  let t2 = text2.toLowerCase();  
  // stringni split yordamida split yordamida arrayga aylantirib uni hr bit harfni ajratib beradi sort operatori alifbo bo'yicha tahlab beradi
  t1 = t1.split("").sort();
  t2 = t2.split("").sort();
  
  
  for (let i = 0; i < t1.length; i++){
        // loop operatori orqali arrayni index valuesini solishtirib chiqilmoqda 
      if (t1[i] !== t2[i]) {        
        return false;
        
      }      
    }
    return true;
}

console.log(checkContent("mitgroup", "gmtiprou"));
