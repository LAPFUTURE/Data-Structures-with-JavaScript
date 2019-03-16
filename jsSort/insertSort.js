
function insertSort(list){
    let temp;
    let length = list.length;
    for(let i = 1; i <= length - 1; i++){
        temp = list[i];
        let j = i;
        while(j > 0 && list[j-1] >= temp){
            list[j] = list[j-1];
            j--;
        }
        list[j] = temp;
    }
}

let list = [3,2,4,5,90,12,7];
insertSort(list);
console.log(list);