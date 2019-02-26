/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x=== 0 || x){
        if(x < 0){
           return false;
        }
        let string = x+"";
        let strArr = string.split("");
        
        if(strArr.length === 0){
            return false;
        }else if(strArr.length === 1){
       
            return true;
        }else{
            let i = 0;
            let j = strArr.length - 1;
            while(i < j){
                if(strArr[i] === strArr[j]){
                    i = i + 1;
                    j = j - 1;
                    if(i > j || i === j){
                        return true;
                   
                             }
                }else{
                    return false;
                }
            }
            return false;
        }
    }else{
        return false;
    }
};