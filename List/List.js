// 这是一个List类,链表的数据结构
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext = hasNext;
    this.hasPrev = hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (let i = 0, length = this.dataStore.length; i < length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) { //感觉有问题
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (let i = 0, length = this.dataStore.length; i < length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    this.pos--;
}

function next() {
    if (this.pos < this.listSize) {
        this.pos++;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function hasNext() {
    return this.pos < this.listSize;
}

function hasPrev() {
    return this.pos >= 0;
}

function createList(){
    return new List();//不加括号会返回同一个List实例，即成为单体
}
    
module.exports = createList;
// module.exports = (function(){
//     return new List();
// }());
    