
import UseRSA from  '../../src/taskInventory/order_14_UseRSA';

const rsa = new UseRSA();
// rsa.genKeysByOpenssl(console.log);

const text = 'this is a secret message!';
const encrytoText = rsa.encryto(text);
console.log(encrytoText);

const decrytoText = rsa.decryto(encrytoText);
console.log(decrytoText);

console.log(text === decrytoText);
