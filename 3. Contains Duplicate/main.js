let hasDuplicate = ( numArray ) => {
    let mySet = new Set(numArray);
    if(mySet?.size === numArray?.length){
        // console.log(mySet?.size)
        return false
    }
    // console.log(mySet?.size)
    return true
}
console.log(hasDuplicate([1,0,1,2]))