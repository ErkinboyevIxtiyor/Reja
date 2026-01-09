// TASK F

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

const findDoublers = (str) => {
   const sorted = str.split('').sort();

  for (let i = 0; i < sorted.length - 1; i++) {    
    if (sorted[i] === sorted[i + 1]) {
      return true;
    }
  }
  return false;
  
};

console.log(findDoublers("hello"));
