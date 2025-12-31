// TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

const countDigits = (text) => {
    let count = 0;    
    for (item of text) if (!isNaN(item)) count++;
    console.log(count);
    
}
countDigits("ad2a54y79wet0sfgb9");