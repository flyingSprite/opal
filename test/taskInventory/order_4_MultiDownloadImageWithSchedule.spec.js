
import MultiDownloadImageWithSchedule from '../../src/taskInventory/order_4_MultiDownloadImageWithSchedule';

const imageUrl = 'http://img.hb.aicdn.com/576fe24099dd9481d52ebeb503b0e17cd95183d5341e6-VUYSZv_fw658';
const savePath = 'D:\\test';

const images = [];
for (let i = 0; i < 1000; i ++) {
  images.push({ url: imageUrl, name: `img_${i}.jpg` });
}

const di = new MultiDownloadImageWithSchedule(images, savePath);
di.download((report) => {
  console.log(report);
});

