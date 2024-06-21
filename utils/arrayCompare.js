const itemFinder = (arr1, arr2) => {
  const common = arr1.filter((items) => arr2.includes(items));
  return common;
};

module.exports = { itemFinder };
