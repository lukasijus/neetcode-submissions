class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let count = 0
        for(let i = 0; i < arr.length; i++) {
            let a = []
            for(let j =i; j < i+k; j++) {
                if(j > arr.length - 1) break; 
                a.push(arr[j])
            }
                            if(a.reduce((a,b) => a + b)/k >= threshold && a.length === k) {
                                //console.log("a",a)
                    count++
                }
        }
        return count
    }
}
