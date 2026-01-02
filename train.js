// TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

const moment = require("moment");
let realTime = moment().format("HH:mm");

class Shop {
  constructor(product1, product2, product3) {
    this.product1 = product1;
    this.product2 = product2;
    this.product3 = product3;
  }
  qoldiq() {
    console.log(
      `Hozir ${realTime}'da ${this.product1}'ta non, ${this.product2}'ta lag'mon va ${this.product3}'ta cola mavjud`
    );
  }
  sotish(product, count) {
    if (count > this.product1) {
      console.log("Mahsulot yetarli emas");
    }
    this.product1 -= count;
    console.log(`${count} ta ${product} sotildi`);
  }
  qabul(product, count) {
    this.product3 += count;    
    console.log(`${count} ta ${product} qabul qilindi`);
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qoldiq();
shop.qabul("cola", 4);
shop.qoldiq();