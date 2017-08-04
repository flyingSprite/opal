
import DownloadImageWithUrl from '../../src/taskInventory/order_3_DownloadImageWithUrl';


const imageUrl = 'http://img.hb.aicdn.com/576fe24099dd9481d52ebeb503b0e17cd95183d5341e6-VUYSZv_fw658';
const savePath = 'D:\\test';
const saveName = 'd5341e6.jpg';

DownloadImageWithUrl.download(imageUrl, savePath, saveName, (err) => {
  console.log(err);
  console.log('Done.');
});
