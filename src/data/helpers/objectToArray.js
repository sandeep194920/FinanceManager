Object.size = function (obj) {
  let size = 0,
    details;
  for (details in obj) {
    if (obj.hasOwnProperty(details)) size++;
  }
  return size;
};

export const objToArray = (obj, mainKey, innerKey) => {
  const arr = [];
  const innerArr = [];
  const keys = Object.keys(obj);

  if (innerKey) {
    keys.forEach((key) => {
      for (let i = 0; i < Object.size(obj[key][innerKey]); i++) {
        innerArr.push({ ...obj[key][innerKey][i] });
      }
    });
  }

  keys.forEach((key) => {
    arr.push({
      [mainKey]: obj[key][mainKey],
      [innerKey]: innerArr,
    });
  });
  return arr;
};
