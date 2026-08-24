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
        let dummy = head 
        if(head ===  null  ) return false 
        let i = 0
        while(head) {
            //console.log(head.val)
            if(head === null) {
                return false 
            }
            const curr = head.val 
            const next = head.next 
            if(next === null) 
            {
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
