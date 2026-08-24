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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        let arr: number[] = []

        function rsv(node: TreeNode | null, level) : boolean {
            if(!node) return false 
            
            if(node.left && node.right) {
                if(!arr[level]) {
                    arr[level] = node.val
                }

                rsv(node.right, level + 1)
                rsv(node.left, level + 1)
            }
            else if(node.right) {
                if(!arr[level]) {
                    arr[level] = node.val
                }
                rsv(node.right, level + 1)
            } else {
                if(!arr[level]) {
                    arr[level] = node.val
                }
                rsv(node.left, level + 1)
            }
        }
        rsv(root,0)
        console.log(arr) 

        return arr
    }

}
