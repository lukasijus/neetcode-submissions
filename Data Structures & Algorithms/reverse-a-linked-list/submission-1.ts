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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let ll = head
        const arr = []
        if(!head || !head.next) return head
        while(ll.next !== null) {
            arr.push(ll.val)
            ll = ll.next
        }
        arr.push(ll.val)
        const out_head = new ListNode(arr[arr.length - 1], new ListNode())
        let out = out_head
        for(let i = arr.length; i > 0; i--) {
           // console.log(arr[i - 1])
            out.val = arr[i -1]
            if(i == 1) {
                break;
            }
            out.next = new ListNode()
            out = out.next
        }
        // console.log("ll.val", ll.val, arr, out)
        return out_head
    }
}
