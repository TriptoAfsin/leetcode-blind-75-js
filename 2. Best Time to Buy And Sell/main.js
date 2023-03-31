let maxProfit = (prices) => {
    let left = 0 // defining left pointer (left = buy)
    let right = 1 // defining right pointer (right = sell)
    let profit
    let maxProfit = 0

    //left should be always less than right

    while( right < prices.length){
        if(prices[left] < prices[right]){ //checking profit
            profit = prices[right] - prices[left] //amount of profit
            if(profit > maxProfit){
                maxProfit = profit //assigning max profit
            }
        }
        else{
            left = right //if we increment by one then it won't be efficient as right was less than left so move to right directly !
        }
        right += 1
    }
    return maxProfit
    // return {
    //     maxProfit: maxProfit,
    //     left: left,
    //     right: right
    // }
} 

console.log(maxProfit([2,1,2,1,0,1,2]))