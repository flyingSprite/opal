
import GenerateSHA from  '../../src/taskInventory/order_10_GenerateSHA';

const sha1Text = GenerateSHA.sha1('123456');
console.log(sha1Text); // 7c4a8d09ca3762af61e59520943dc26494f8941b
console.log(sha1Text === '7c4a8d09ca3762af61e59520943dc26494f8941b'); // true

const sha256Text = GenerateSHA.sha256('123456');
console.log(sha256Text); // 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
console.log(sha256Text === '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'); // true
