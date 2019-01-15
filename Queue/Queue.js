function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.isEmpty = isEmpty;
}

function enqueue(element){//向队尾添加元素
    this.dataStore.push(element);
}

function dequeue(){//向队首删除元素
    return this.dataStore.shift();
}

function front(){//读取队首
    return this.dataStore[0];
}

function back(){//读取队尾
    return this.dataStore[this.dataStore.length - 1];
}

function toString(){
    let str = "";
    for(let i = 0, length = this.dataStore.length; i < length; i++){
        str += this.dataStore[i] + "\n";
    }
    return str;
}

function isEmpty(){
    if(this.dataStore.length == 0){
        return true;
    }else{
        return false;
    }
}

function createQueue(){
    return new Queue();
}

module.exports = createQueue;