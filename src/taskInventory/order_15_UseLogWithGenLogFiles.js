import log4js from 'log4js';


/**
 * Order 15: Use log with auto generate log files.
 */
class UseLogWithGenLogFiles {
  constructor() {
    log4js.configure('./src/taskInventory/denpendency/log4js.json');
  }
}

export default UseLogWithGenLogFiles;
