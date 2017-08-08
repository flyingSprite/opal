import ShowTimeBefore from  '../../src/taskInventory/order_17_ShowTimeBefore';

console.log(ShowTimeBefore.show(new Date().getTime(), 1502162936000)); // 1分钟前
console.log(ShowTimeBefore.show(new Date().getTime(), 1502162836000)); // 3分钟前
console.log(ShowTimeBefore.show(new Date().getTime(), 1502161936000)); // 18分钟前
console.log(ShowTimeBefore.show(new Date().getTime(), 1502152936000)); // 2小时前
console.log(ShowTimeBefore.show(new Date().getTime(), 1502122936000)); // 11小时前
console.log(ShowTimeBefore.show(new Date().getTime(), 1502062936000)); // 1天前
console.log(ShowTimeBefore.show(new Date().getTime(), 1482162936000)); // 231天前
