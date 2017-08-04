
import GenerateFolder from '../../src/taskInventory/order_1_GenerateFolderByTimestamp';

// GenerateFolder.generateFolder('/Users/Fernando/Develop/test', '/cc/xxx/sssxx/');

GenerateFolder.generateByDate(
  '/Users/Fernando/Develop/test',
  new Date().getTime()
);
