/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  const dictOf = (arr) => arr.reduce((acc, cur) => ({
      ...acc,
      [cur]: acc[cur] ? acc[cur] + 1 : 1
  }), {})

  const dict1 = dictOf(nums1)
  const dict2 = dictOf(nums2)
  
  return Object.keys(dict1).flatMap(key => {
      if (dict2[key]) {
          return Array(Math.min(dict1[key], dict2[key])).fill(key)
      }

      return []
  })

};