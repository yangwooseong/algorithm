/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
  const dict = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').reduce((acc, cur, idx) => ({
      ...acc,
      [cur]: idx + 1,
  }), {})
  const length = columnTitle.length

  return columnTitle.split('').reduce((acc, cur, idx) => acc + dict[cur] * Math.pow(26, length - 1 - idx), 0)
};