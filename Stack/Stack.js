function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}

function push(element){
    this.dataStore[this.top] = element;
    top++;
}

function pop(){
    this.top--;
    return this.dataStore[this.top];
}

function peek(){//返回第top-1个元素，即栈顶元素
    return this.dataStore[top-1];
}

function length(){
    return this.top;
}

function clear(){
    this.top = 0;
}

