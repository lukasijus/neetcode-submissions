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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return  []
        let out: number[][] = [] 
        function dfs(node: TreeNode | null, level: number): void {
            if(node === null) return null 
            if(out[level]) {
                //console.log("hei")
                out[level].push(node.val)
            } else {
                //console.log("hello")
                out[level] = [node.val]
            }
            //console.log("moi")
            dfs(node.left,level+1)
            dfs(node.right, level + 1)
        }
        dfs(root,0)
        return out 
    }
}
