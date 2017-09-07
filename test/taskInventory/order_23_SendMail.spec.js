import SendMail from '../../src/taskInventory/order_23_SendMail';


const sm = new SendMail();

sm.sendText(
  'zrwuxian@126.com',
  '张茹的附件',
  '一个简单的分发方法'
);
