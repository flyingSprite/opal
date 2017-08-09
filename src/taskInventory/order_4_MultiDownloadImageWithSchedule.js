
import DownloadImageWithUrl from './order_3_DownloadImageWithUrl';

/**
 * Order 4: Donwload multi images, and get the schedule.
 *
 * If crawl a website, we can crawl many image url and save them to database.
 * When download those images, should know the schedule.
 */
class MultiDownloadImageWithSchedule {
  constructor(images, savePath) {
    this.savePath = savePath;
    this.images = images;
    this.report = {
      error: 0,
      complete: 0,
      total: this.images.length
    };
  }

  download(callback) {
    this.toCrawl(0, callback);
  }

  toCrawl(index, callback) {
    if (index >= 0 && index < this.images.length) {
      const img = this.images[index];
      DownloadImageWithUrl.download(img.url, this.savePath, img.name, (err) => {
        if (err) {
          this.report.error += 1;
        } else {
          this.report.complete += 1;
        }
        if (callback) {
          callback(this.report);
        }
        this.toCrawl(index + 1, callback);
      });
    }
  }
}

export default MultiDownloadImageWithSchedule;
