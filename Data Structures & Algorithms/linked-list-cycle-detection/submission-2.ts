/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if(head ===  null  ) return false 
        let i = 0
        while(head) {
            if(head === null) {
                return false 
            }
            head = head.next
            i++
            if(i > 1000) {
                return true
            }
        }
        return false 
    }
}
