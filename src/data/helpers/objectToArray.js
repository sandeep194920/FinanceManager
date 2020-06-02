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
  let innerArr = [];
  const keys = Object.keys(obj);

  if (innerKey) {
    keys.forEach((key) => {
      // gets the details
      for (let i = 0; i < Object.size(obj[key][innerKey]); i++) {
        innerArr.push({ ...obj[key][innerKey][i] });
      }
      // puts main into main and details in to details
      arr.push({
        [mainKey]: obj[key][mainKey],
        [innerKey]: innerArr,
      });
      innerArr = [];
    });
  }

  return arr;
};
