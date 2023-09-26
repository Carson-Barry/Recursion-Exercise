/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return (nums[0] * product(nums.slice(1)))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  let currentLen = words[0].length;
  let nextLen = longest(words.slice(1));
  if (nextLen > currentLen) return nextLen;
  return currentLen;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return "";
  }
  return str[0] + everyOther(str.slice(2));;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }
  return ((str[0] === str.slice(-1)) && isPalindrome(str.slice(1, -1)));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr[0] === val) {
    return index;
  }
  return findIndex(arr.slice(1), val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) {
    return "";
  }
  return str.slice(-1) + revString(str.slice(0, -1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let allStrings = [];
  for (const key in obj) {
    const keyItem = obj[key]
    if (typeof keyItem === "string") allStrings.push(keyItem);
    else if (typeof keyItem === "object") allStrings = [...allStrings, ...gatherStrings(keyItem)];
  }
  return allStrings;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings
};
