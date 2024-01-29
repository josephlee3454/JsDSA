class Node{
    constructor(value){
       this.value = value;
       this.next = null;

    }
}


class LinkedList{
    constructor(value){
       const newNode = new Node(value);
       this.head = newNode;
       this.tail = this.head;
       this.length = 1;

    }
    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return null;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length < 1){
            this.tail = this.head;
        }
        return temp;
    }

    get(idx){
        if(idx > this.length || idx <0 )return undefined; 
        else{
            let currNode = this.head;
            let count = 0;
            while(count != idx){
                currNode = currNode.next;
                count++;
            }
            return currNode;
        }
    }

    set(idx, value){
        let temp = this.get(idx);
        if(temp){
            temp.value = value;
            return true
        }
        return false; 
    }

    insert(idx, Value){
        if(idx > this.length || idx < 0)return false;
        if(idx === 0) return this.unshift(value);
        if(idx === this.length)return this.push(value);

        const newNode = new Node(Value);
        const temp = this.get(idx-1);
        newNode.next = temp.next;
        temp.next = newNode
        this.length++;
        return true;

    }

    remove(idx){
        if(idx >= this.length || idx < 0) return null;
        if(idx === 0) return this.shift();
        if(idx === this.length-1) return this.pop();
        
        let temp = this.get(idx);
        let removedNode = temp; 
        temp = temp.next;
        this.length--;
        return removedNode
    }


    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        while(temp){
            next = temp.next
            temp.next = prev;
            prev = temp
            temp =next; 
        }
        
    }
}
let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);

console.log("LL before reverse():");
myLinkedList.printList();

myLinkedList.reverse();

console.log("\nLL after reverse():");
myLinkedList.printList();
