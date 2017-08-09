
import log4js from 'log4js';

import UseLogWithGenLogFiles from '../../src/taskInventory/order_15_UseLogWithGenLogFiles';

/** Order 15: Use log with auto generate log files testing.
 * Please use project root to run this test.
 */
new UseLogWithGenLogFiles();

const logger = log4js.getLogger('normal');
logger.info('This is a tet!');
