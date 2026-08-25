/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        if(!root) return 0 
        if(!root.left && !root.right) return 1 
        const arr: number[] = []

        function add(node: TreeNode | null): boolean {
            if(!node) return false 

            arr.push(node.val)

            add(node.left)
            add(node.right)
            return true 
        }
        add(root)
        arr.sort((a,b) => a - b) 

        return arr[k - 1]
    }
}
