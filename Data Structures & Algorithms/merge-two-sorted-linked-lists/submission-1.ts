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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(!list1 && !list2) {
            return list1 
        }
        let dummy = new ListNode() 
        let out = dummy 
        while(list1 || list2) {

            if(!list1) {
                out.val = list2.val 
                list2 = list2.next 
            }
            else if(!list2) {
                out.val = list1.val
                list1 = list1.next
            }
            else if(list1.val > list2.val) {
                out.val = list2.val
                list2 = list2.next 
            } else  {
                out.val = list1.val
                list1 = list1.next 
            }
            if(!list1 && !list2) {
                break;
            }
            out.next = new ListNode()
            out = out.next 
            
        }
        return dummy  
    }
}
