// TASK A

const countLetter = (letter, word) => {
    count = 0;
    for(item of word){
        item == letter ? count++ : 0;
    }
    console.log(count);
};

countLetter("e", "engineer");



// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling",
// // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ];

// const maslahatBering = (a, callback) => {
//     if(typeof a !== "number"){
//         callback("insert number", "");
//     }else if (a <= 20) {
//         callback(list[0]);
//     }else if(a > 20 && a <=30){
//         callback(list[1]);
//     }else if(a > 30 && a <=40){
//         callback(list[2]);
//     }else if(a > 40 && a <=50){
//         callback(list[3]);
//     }else if(a > 50 && a <=60){
//         callback(list[4]);
//     }else{
//         let count = 0;
//         setInterval(() => {
//             console.log(list[5] + ' ' +count++)
//         }, 2000);
//     }
// };

// maslahatBering(61, (err, data) => {
//     if(err){
//         console.log("Error:", err);
//     }else{
//         console.log("Answer:", data);
//     }
    
// });

// console.log("next line");


// async function maslahatBering (a) {
//     if(typeof a !== "number") throw new Error("insert number");
//     else if (a <= 20) return list[0];
//     else if(a > 20 && a <=30) return list[1];
//     else if(a > 30 && a <=40) return list[2];
//     else if(a > 40 && a <=50) return list[3];
//     else if(a > 50 && a <=60) return list[4];
//     else{
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 1000);
//         });

      
//     }
// };

// Birinchi sync functionlar ishlagandan keyin async functionga ishlaydi
// then/catch
// maslahatBering(65).then(data => {
//     console.log("answer:", data);
// }).catch(err => {
//     console.log("Error:", err);
// });
// console.log("next");


// await

// async function run() {
//     let answer = await maslahatBering(70);
//     console.log(answer);
//     answer = await maslahatBering(25);
//     console.log(answer);
//     answer = await maslahatBering(39);
//     console.log(answer);
// }
// run();

// console.log("next");