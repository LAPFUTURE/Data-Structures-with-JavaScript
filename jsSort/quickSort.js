function quickSort(list){
    let length = list.length;
    if(length === 0){
        return [];
    }
    let lesser = [];
    let greater = [];
    let pivot = list[0];
    for(let i = 1; i < list.length; i++){
        if(list[i] < pivot){
            lesser.push(list[i]);
        }else{
            greater.push(list[i]);
        }
    }
    return quickSort(lesser).concat(pivot,quickSort(greater));
}

let list = [1,3,5,7,9,2,4,6,8,0,99];
let result = quickSort(list);
console.log(result);