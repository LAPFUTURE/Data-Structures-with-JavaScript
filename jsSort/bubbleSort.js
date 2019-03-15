let swap =  require('./utils').swap;
function bubbleSort(list){
    for(let i = list.length; i >= 2; i--){
        for(let j = 0; j < i - 1; j++){
            if(list[j] > list[j+1]){
                swap(list,j,j+1);
            }
        }
    }
}
let list = [3,2,4,6,1,7,8,5];
bubbleSort(list);
console.log(list);
