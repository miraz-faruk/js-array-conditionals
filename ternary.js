let price = 500;
const isLeader = true;

// if isLeader === true 
// if (isLeader === true) {
//     price = 0;
// }
// else {
//     price += 100;
// }

// console.log(price);

price = isLeader === false ? 0 : price + 100;
console.log(price);