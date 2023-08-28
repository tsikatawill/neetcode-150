const containsDuplicates = (nums) => {
  const distinctArr = new Set();

  for (const num of nums) {
    if (distinctArr.has(num)) return true;
    distinctArr.add(num);
  }

  return false;
};

// console.log(containsDuplicates([1, 2, 3, 4])); // return false
// console.log(containsDuplicates([1, 2, 3, 4, 2, 5])); // return true
