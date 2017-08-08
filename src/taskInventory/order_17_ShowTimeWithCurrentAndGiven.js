
/**
 * Order 17: show time with give time and current time.
 */

class ShowTimeBefore {

  static show(currentTimestamp, beforeTimestamp) {
    if(currentTimestamp < beforeTimestamp) {
      return '';
    }
    if (currentTimestamp - beforeTimestamp < 120 * 1000) {
      return '1分钟前';
    }
    if (currentTimestamp - beforeTimestamp < 60 * 60 * 1000) {
      const minute = parseInt((currentTimestamp - beforeTimestamp) / 60 / 1000);
      return `${minute}分钟前`;
    }
    if (currentTimestamp - beforeTimestamp < 24 * 60 * 60 * 1000) {
      const hour = parseInt((currentTimestamp - beforeTimestamp) / 60 / 60 / 1000);
      return `${hour}小时前`;
    }
    const day = parseInt((currentTimestamp - beforeTimestamp) / 24 / 60 / 60 / 1000);
    return `${day}天前`;
  }
}

export default ShowTimeBefore;
