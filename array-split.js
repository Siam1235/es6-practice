const number = [1,2,3,4,5,6,7,8,9,10];
const part = number.slice(5,9);
console.log(part);
console.log(number);
//start deleted count and how much will he delete thats splice
const cut = number.splice(3,7, 11,12, 13, 14, 15);
console.log(cut);
console.log(number);
 const together = number.join(" 🖐🏾 ");
 console.log(together);