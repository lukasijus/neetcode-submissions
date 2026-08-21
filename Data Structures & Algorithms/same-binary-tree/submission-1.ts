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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        function dfs(node1: TreeNode, node2:TreeNode) {
            if(node1 === null && node2 === null) return true 
            if(node1 === null && node2 !== null) return false 
            if(node1 !== null && node2 === null) return false 

            const leftNode1 = node1.left
            const rightNode1 = node1.right 
            const leftNode2 = node2.left 
            const rightNode2 = node2.right
            if(leftNode1 === null && leftNode2 !== null) return false 
            if(leftNode1 !== null && leftNode2 === null) return false 
            if(rightNode1 === null && rightNode2 !== null) return false 
            if(rightNode1 !== null && rightNode2 === null) return false 
            if(node1.val !== node2.val) return false 


            return dfs(leftNode1, leftNode2) && dfs(rightNode1, rightNode2) 
        }
        if(dfs(p,q)=== false ) {
            return false 
        }
        return true
    }
}
