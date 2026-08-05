class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let count = 0
        let dp = 0 
        for(let i = 0; i < arr.length; i++) {
          if(i === 0) {
            for(let j = 0; j < k; j++) {
                dp+=arr[j]
            }
          } else {
            dp-=arr[i-1]
            dp+=arr[i+k - 1]
          }
          if(dp/k >= threshold) {
            
            count++
            //console.log("dp", dp, "count", count)
          }
        }
        return count
    }
}
