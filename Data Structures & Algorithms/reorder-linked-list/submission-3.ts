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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let dummy = head 
        const arr : number[] = [] 
        while(dummy) {
            arr.push(dummy.val)
            dummy = dummy.next
        }
        ///console.log(arr)
        let i = 0 
        let j = arr.length - 1
        let count = 0
        while(head) {
            if(count % 2 === 0) {
                head.val = arr[i]
                i++
            } else {
                head.val = arr[j]
                j--
            }
            count++
            //console.log("I", i, head.val)
            head = head.next
        }
    }
}
