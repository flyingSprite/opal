

import multiAsyncCallback from '../../src/taskInventory/order_20_MultiAsyncCallback';

multiAsyncCallback([
  {test: 1},
  {test: 2}
], query => new Promise((resolve) => {
  const my = {};
  my.test = query.test + 1;
  resolve(my);
}), (query, result) => {
  return { query, result };
}, (finalResults) => {
  console.log(finalResults);
});
