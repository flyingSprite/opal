import fs from 'fs';
import path from 'path';

import moment from 'moment';


const generateFolder = (rootDir, folders) => {
  let folderPath = rootDir;
  // Create folder one by one.
  folders.forEach((folder) => {
    if (folder) {
      folderPath = path.join(folderPath, folder);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
    }
  }, this);
  return folderPath;
};


/**
 * Order 1: Generate folder by timestamp
 * For uploading file, should auto create folder to save the uploaded file.
 */
class GenerateFolder {

  static generateByYear(rootDir, timestamp) {
    const lt = moment(timestamp);
    return generateFolder(rootDir, [String(lt.year())]);
  }

  static generateByMonth(rootDir, timestamp) {
    const lt = moment(timestamp);
    return generateFolder(rootDir, [String(lt.year()), String(lt.month() + 1)]);
  }

  static generateByDate(rootDir, timestamp) {
    const lt = moment(timestamp);
    return generateFolder(rootDir, [
      String(lt.year()),
      String(lt.month() + 1),
      String(lt.date())
    ]);
  }
}

export default GenerateFolder;
