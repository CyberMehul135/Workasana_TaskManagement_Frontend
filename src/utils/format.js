export const arrayToString = (arr, key = "name") => {
  return arr?.reduce((acc, cur, i) => acc + (i ? ", " : "") + cur[key], "");
};

export const getPercentage = (total, x) => {
  if (total == 0) {
    return 0;
  } else {
    const result = ((x / total) * 100).toFixed(0);
    return result;
  }
};
