class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0 
        let l = 0 
        let r = heights.length - 1 
        let i = 0
        while(l < r) {



            const wall = Math.min(heights[l], heights[r])
            const cont = wall * (r - l ) 
            max = Math.max(cont, max)
        if(heights[l] < heights[r]) {
            let j = l 
            while(heights[j + 1] < heights[l]) {
                j++
                if(j >=  r) {
                    l = j 
                    break; 
                }
            }
            l = j 
        }
        if(heights[r] < heights[r - 1]) {
            let j = r 
            while(heights[j - 1] < heights[r]) {
                j--
                if(j <= l) {
                    j = r 
                    break;
                }
            }
            r = j 
        } 
        if(heights[l] < heights[r]) {
            l++
        } else {
            r--
        }

        }
        return max
    }
}
