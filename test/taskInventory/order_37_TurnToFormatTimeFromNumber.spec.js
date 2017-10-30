import formatTime from '../../src/taskInventory/order_37_TurnToFormatTimeFromNumber';

console.log(formatTime(0));
console.log(formatTime(27));
console.log(formatTime(60));
console.log(formatTime(61));
console.log(formatTime(366));
console.log(formatTime(3600));
console.log(formatTime(3601));
console.log(formatTime(7622));
console.log(formatTime(36455));
console.log('Special Type:');
console.log(formatTime('36455'));
console.log(formatTime('ss6455'));
