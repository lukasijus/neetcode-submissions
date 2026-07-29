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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if(!root) return 0
        return 1 + this.dfs(root)   
    }
    dfs(node : TreeNode): number{
        if(!node.left && !node.right) return 0
        if(node.left && node.right) return 1 + Math.max(this.dfs(node.left), this.dfs(node.right)) 
        if(node.left) return 1  + this.dfs(node.left)
        if(node.right) return 1 + this.dfs(node.right)
    } 
}
