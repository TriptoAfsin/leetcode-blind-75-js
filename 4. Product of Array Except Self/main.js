let productExceptSelf = nums => {
  let result = new Array(nums.length).fill(1); //filling the array with default value 1
  let preFix = 1;
  let postFix = 1;
  //for prefix(starting from first)
  for (let i = 0; i < nums.length; i++) {
    result[i] = preFix; //setting the prefix array initially
    preFix *= nums[i]; //calculating the new prefix by multiplying the i th position value of the input array
  }
  //for post fix(starting from end)
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postFix; //the results array is filled with multiplication of prefix, so now just multiply the current postFix
    postFix *= nums[i]; // calculating the new postFix by multiplying the i th position value of the input array
  }
  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
