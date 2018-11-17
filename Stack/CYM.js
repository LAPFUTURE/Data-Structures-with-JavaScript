const Stack = require("./Stack");

function mulBase(num,base){//适用于base为2-9，数制转换  
    let s = new Stack();
    do{
        s.push(num % base);
        num = num / base;
        num = Math.floor(num);
    }while(num > 0);

    let converted = "";
    while(s.length() > 0){
        converted += s.pop();
    }
    return converted;
}

function isPalindrome(word){//判断是否回文
    if(typeof word === "number"){
        word = "" + word;
    }
    let s =new Stack();
    for(let i = 0; i < word.length; i++){
        s.push(word[i]);
    }
    let rword = "";
    while(s.length()){
        rword += s.pop();
    }
    if(word === rword){
        return true;
    }else{
        return false;
    }
}

function factorialStack(number){//栈模拟递归,计算阶乘
    let s = new Stack();
    while(number){
        s.push(number);
        number--;
    }
    let product = 1;
    while(s.length() > 0){
        product *= s.pop();
    }
    return product;
}

module.exports = {
    mulBase:mulBase,
    isPalindrome:isPalindrome,
    factorialStack:factorialStack,
};