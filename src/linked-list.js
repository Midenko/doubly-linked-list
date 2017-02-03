const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var newNode = new Node(data = data);

        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }

        this.length++;

        return this;
    }

    head() {
        if (!this._head) {
            return null;
        }
        return this._head.data; 
    }

    tail() {
        if (!this._head) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        var tmp = this._head;
        for (var i = 0; i < index; i++) {
            tmp = tmp.next;
        }
        if (!tmp) {
            return 'null';
        }
        return tmp.data;
    }

    insertAt(index, data) {
        var tmp = this._head;

        if (index == 0 && !this._head) {
            this.append(data);
        }

        else {
            for (var i = 0; i < index; i++) {
                tmp = tmp.next;
            }

            tmp.data = data;
        }

        return this;
    }

    isEmpty() {
        if (!this._head) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {

        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        var tmp = this._head;
        var beforeDeletedNode = null;
        var afterDeletedNode = null;

        if (index == 0) {
            this._head = tmp.next;
            if (!this._head) {
                this._tail = null;
            } else {
                this._head.prev = null;
            }
        }

        else if (index == this.length - 1) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        }

        else {
            for (var i = 0; i < index; i++) {
                tmp = tmp.next;
            }

            beforeDeletedNode = tmp.prev;
            afterDeletedNode = tmp.next;
            beforeDeletedNode.next = afterDeletedNode;
            afterDeletedNode.prev = beforeDeletedNode;
            tmp = null;
        }

        this.length--;

        return this;

    }

    reverse() {
        var fromTail = this._tail;
        var fromHead = this._head;
        var tmp = null;

        for (var i = 0; i < this.length / 2 ; i++) {
        tmp = fromTail.data;
        fromTail.data = fromHead.data;
        fromHead.data = tmp;

        fromHead = fromHead.next;
        fromTail = fromTail.prev;
        }

        return this;

    }

    indexOf(data) {
        var tmp = this._head;
        var index = 0;
        var i = 0;
        while(i < this.length) {
            if(tmp === null) return -1;
            if(tmp.data == data) break;
            index++;
            tmp = tmp.next;
        }

        return index
    }
}
