class Node {

    #next;
    #data;

    constructor(data) {

        this.#data = data;
        this.#next = null;
    }

    set next(node) {

        this.#next = node;
    }

    get next () {

        return this.#next;
    }

    get data () {

        return this.#data;
    }
}

let head = new Node("Nads");
let node1 = new Node("Lauriano");
let node2 = new Node('Marcelo');

head.next = node1;
node1.next = node2;

let currentNode = head;

while (currentNode != null) {

    console.log(currentNode.data)
    currentNode = currentNode.next;
}