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
    goodNodes(root: TreeNode | null): number {
        if(!root) return 0 

        let count = 0 
        function countNodes(node: TreeNode | null, max:number): boolean {
            if(!node) {
                return false 
            }
            //console.log("node.val",node.val, "count", count, "max",max )
            if(node.val >= max) {
                count++

                //console.log("count", count, "node.val", node.val, )
                countNodes(node.left, node.val) 
                countNodes(node.right, node.val)

            }  else {

                //console.log("count", count,  "max",max )
                countNodes(node.left, max)
                countNodes(node.right, max)

            }
        }
        countNodes(root, -Infinity)
        return count 
    }
}
