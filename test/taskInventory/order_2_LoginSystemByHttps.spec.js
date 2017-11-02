
import LoginSystem from '../../src/taskInventory/order_2_LoginSystemByHttps';
// LoginSy  stem from './order_2_LoginSystemByHttps';

const ls = new LoginSystem();
ls.login((data) => {
  console.log(data);
});

ls.login2().then((data) => {
  console.log(data);
}).then((e) => {
  console.log(e);
});
