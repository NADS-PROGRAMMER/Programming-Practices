class Node {

    #data;
    #next;

    constructor(data) {

        this.#data = data;
        this.#next = null;
    }

    set next(nextNode) {

        this.#next = nextNode;
    }

    get next() {

        return this.#next
    }

    get data () {

        return this.#data;
    }
}
// END OF LINKED LIST CLASS

class LinkedList {

    #head;
    #tail;

    add(data) {

        if (this.#head == null) {

            this.#head = new Node(data);
            this.#head.next = null;
            this.#tail = this.#head;
            return;
        }

        let previousTail = this.#tail;
        this.#tail = new Node(data);
        previousTail.next = this.#tail;
    }

    printLinkedList() {

        let currentNode = this.#head;
        let nodes = "";

        while (currentNode != null) {

            nodes += currentNode.data + " ";
            currentNode = currentNode.next;
        }

        return nodes;
    }

    length() {

        let currentNode = this.#head;
        let size = 0;

        while (currentNode != null) {

            currentNode = currentNode.next;
            size++;
        }

        return size;
    }

    getHead() {

        return this.#head;
    }
}

let list1 = new LinkedList();

list1.add(9);
list1.add(9);
list1.add(9);
list1.add(9);
list1.add(9);
list1.add(9);
list1.add(9);
console.log(list1.printLinkedList());

let list2 = new LinkedList();
list2.add(9);
list2.add(9);
list2.add(9);
list2.add(8);
console.log(list2.printLinkedList());

addTwoNumbers(list1, list2);

/**
 * PROBLEM DEFINITION: 
 * 
 * You are given two non-empty linked lists representing two non-negative integers.     
 * The  digits are stored in reverse order, and each of their nodes contains a single   
 * digit. Add the two numbers and return the sum as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * NOTE. YOU ONLY HAVE TO TRAVERSE FROM THE HEAD OF THE LIST
 * Example is
 * 
 *   9, 999, 999 
 * +      8, 999
 * _______________
 * 10, 008, 998
 * 
 * In reverse:
 * list1 = 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9
 * list2 = 9 -> 9 -> 9 -> 9
 * 
 * New Linked List = 8 -> 9 -> 9 -> 8 -> 0 -> 0 -> 0 -> 1
 */
function addTwoNumbers(list1, list2) {

    let longest = list2;
    let shortest = list1;

    if (list1.length() > list2.length()) {
        longest = list1;
        shortest = list2;
    }

    let newList = new LinkedList(); // a new Linked List

    // Get the head of both linked list.
    let node1 = longest.getHead();
    let node2 = shortest.getHead();
    let remainder = 0;
    let result = 0;
   
    // Only check the longest linked list.
    while (node1 != null) {

        if (node2 != null) {

            result = `${node1.data + node2.data + +remainder}`;
            node2 = node2.next;
        }
            
        else 
            result = `${node1.data + +remainder}`;

        // Check if it is greater than 9 so that we get the remainder.
        if ((+result) > 9) {

            remainder = result[0];
            newList.add(result[1]);
        }
        else {
            newList.add(result);
            remainder = 0;
        }
                
        node1 = node1.next;
    }

    // If the remainder is not empty, add its value to the list.
    if (remainder > 0)
        newList.add(remainder);

    // Print the linked list.
    console.log(newList.printLinkedList());
}












/**
 * l1 -> 9 9 9 9 9
 * l2 -> 9 9 9 9
 * 
 * let longestList = l1.length > l2.length ? l1 : l2;
 * 
 * if (list1 != null && list2 != null) {
 * 
 *    let remainder = 0;
 *    let result = `${list1.data + list2.data + remainder}`;
 *    
 *    if ((+result) > 9) {
 *        remainder = result[0];
 *        newList.add(result[1]);
 *    }
 *    else 
 *        newList.add(result);
 * 
 *    // 8 9 9 9
 *    list1 = list1.next;
 *    list2 = list2.next;
 * } // end of if
 * else {
 * 
 *    result = `${list1 + remainder}`;
 *    
 *    if ((+result) > 9) {
 *        remainder = result[0];
 *        newList.add(result[1]);
 *    }
 *    else 
 *        newList.add(result);
 * } // end of else
 *   end of loop
 * 
 *  if (remainder > 0)
 *    newList.add(remainder);
 * 
 */