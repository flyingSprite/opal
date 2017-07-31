
import LoginSystem from '../../src/order/order_2_LoginSystemByHttps';
// LoginSy  stem from './order_2_LoginSystemByHttps';

const ls = new LoginSystem();
ls.login((data) => {
  console.log(data);
});
