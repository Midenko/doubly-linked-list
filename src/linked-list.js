class LinkedList {
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.count = 0;
    }

    append(data) {
        var newNode = new Node(data = data);
        if (!list.firstNode) {
            list.firstNode = newNode;
            list.lastNode = newNode;
            list.count++;
        }
        else {
            var node = new Node(this.data = data, this.prev = list.lastNode);
            list.lastNode = node;
            list.count++;
        }
    }

    head() {
        if (!list.firstNode) {
            return null;
        }
        return list.firstNode.data;	
    }

    tail() {
        if (!list.firstNode) {
            return null;
        }
        return list.lastNode.data;
    }

    at(index) {
        var tmp = list.lastNode;
        for (var i = 0; i < list.count - index - 1; i++) {
            tmp = tmp.prev;
        }

        return tmp.data;
    }

    insertAt(index, data) {
        var tmp = list.lastNode;
        for (var i = 0; i < list.count - index - 1; i++) {
            tmp = tmp.prev;
        }

        tmp.data = data;
    }

    isEmpty() {
        if (!list.firstNode) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {
        list = new LinkedList;
    }

    deleteAt(index) {
        var tmp = list.lastNode;
        for (var i = 0; i < list.count - index - 1; i++) {
            tmp = tmp.prev;
        }
        delete tmp;
    }

    reverse() {}

    indexOf(data) {}

    length() {
        return list.count;
    }

}