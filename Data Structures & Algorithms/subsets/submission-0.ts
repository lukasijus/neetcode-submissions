class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const ans: number[][] = [];
        const backtrack = (index: number, current: number[]) => {
            ans.push([...current]);
            for (let i = index; i < nums.length; i++) {
                current.push(nums[i]);
                backtrack(i + 1, current);
                current.pop();
            }
        };
        backtrack(0, []);
        return ans;
    }
}