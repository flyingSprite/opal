import http from 'http';
import fs from 'fs';
import path from 'path';


/**
 * Order 3: Download iamge with image url
 * For internet crawl spider, donwload image is necessary. So Write a function to deel it.
 */
class DownloadImageWithUrl {

  static download(imageUrl, savePath, saveName, cb) {
    const file = fs.createWriteStream(path.join(savePath, saveName));
    const request = http.get(imageUrl, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(cb);  // close() is async, call cb after close completes.
      });
    }).on('error', function(err) { // Handle errors
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      if (cb) cb(err.message);
    });
  }
}

export default DownloadImageWithUrl;
