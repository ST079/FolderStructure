const numberFormat = (num) => {
  const marr = String(num).split("");
  let index = marr.length - 3;
  marr.splice(index, 0, ",");
  const result = marr.join("");
  return result;
};

module.exports = { numberFormat };
