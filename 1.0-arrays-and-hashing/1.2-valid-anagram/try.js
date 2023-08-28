var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  function handleSort(value) {
    return [...value].sort().join("");
  }

  const sSorted = handleSort(s);
  const tSorted = handleSort(t);

  return sSorted === tSorted;
};

console.log(isAnagram("car", "rat")); // should return false
console.log(isAnagram("anagram", "margana")); // should return true
