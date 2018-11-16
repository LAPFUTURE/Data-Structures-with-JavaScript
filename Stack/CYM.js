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

function isPalindrome(word){
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

module.exports = {
    mulBase:mulBase,
    isPalindrome:isPalindrome,
};