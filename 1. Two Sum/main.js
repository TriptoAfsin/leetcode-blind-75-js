/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// we could manually loop through all the array and check for their sums with target but it would be n^2 so we try this
const twoSum = (nums, target) => {
    let prevMap = {} //using an object as an hashmap
    for(let i = 0; i < nums?.length; i++){
        diff = target - nums[i] //calculating the diff
        if(prevMap?.hasOwnProperty(diff)){ // searching the diff in our hashmap
            return [prevMap[diff], i] //if diff is found then return the position
        }
        prevMap[nums[i]] = i //if not then push that value num[i] in our hashmap(prevMap)
    }
    return
};

console.log(twoSum([1,2,3,4], 6)) //[1,3]