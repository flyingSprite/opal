
/**
 * Order 37: Analysis a number or a number string to format time, like 00:00:00
 */

const formatTime = (timeNumber) => {
  const doubleNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  timeNumber = parseInt(timeNumber);
  if (!timeNumber) {
    return '00:00:00';
  }
  if (timeNumber < 60) {
    return `00:00:${doubleNumber(timeNumber)}`;
  } else if (timeNumber < 3600) {
    return `00:${doubleNumber(parseInt(timeNumber / 60))}:${doubleNumber(parseInt(timeNumber % 60))}`
  } else {
    return `${parseInt(timeNumber / 3600)}:${doubleNumber(parseInt(timeNumber % 3600 / 60))}:${doubleNumber(parseInt(timeNumber % 60))}`
  }
};

export default formatTime;
