class Node {
    constructor(value,next){
        this.value =value
        this.next = next || null
    }
}



class linekedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    insert (value,after) {
        const nodeToInsert = new Node(value)
        if (!this.head) {
            this.head = nodeToInsert
            this.tail = nodeToInsert
            return
        }

        const node = this._findNode(after)
        if (!node) return
        const originaNext = node.next
        node.next = nodeToInsert

        if (originaNext) nodeToInsert.next = originaNext;
        else this.tail = nodeToInsert

    }

    _findNode(value){
        if (!this.head) return null
        if (this.head.value === value) return this.head
        let cur = this.head
        while (cur.next){
            cur = cur.next
            if (cur.value === value) return cur
        }
        return null
    }

    push (value){
        const nodeToInsert = new Node(value,null);
        if (!this.tail){
            this.head = nodeToInsert
            this.tail = nodeToInsert
        }else{
            this.tail.next = nodeToInsert
            this.tail = nodeToInsert
        }
    }

    remove(after){
        const prevNode = this._findNode(after)
        if (!prevNode) return
        if (prevNode.next){
            const nextNode = prevNode.next.next;
            if (!nextNode) this.tail = prevNode
            prevNode.next.next = null
            prevNode.next = nextNode
        }

    }
}


function linkedListTests() {

}
