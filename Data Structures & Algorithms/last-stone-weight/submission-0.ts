class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        stones.sort((a,b) => a - b)
        let length = stones.length - 1
        while(length >= 1) {
            const x = stones.pop() 
            const y = stones.pop()
            if(x !== y) {
                stones.push(x - y) 
                stones.sort((a,b) => a - b)
                length--
            } else {
                length-=2
            }
            //console.log("stones", stones)
        }
        if(stones.length > 0) {
            return stones[0]
        } else {
            return 0
        }
    }
}
