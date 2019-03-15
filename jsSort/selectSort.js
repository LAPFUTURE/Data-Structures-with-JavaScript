let swap =  require('./utils').swap;

function selectSort(list){
    let min;
    let length = list.length;
    for(let i = 0; i <= length - 2; i++){
        min = i;
        for(let j = i + 1; j <= length - 1; j++){
            if(list[j] < list[min]){
                min = j;
            }
            swap(list,i,min);
        }
    }
}

let list = [3,2,4,6,1,7,8,5,90,12];
selectSort(list);
console.log(list);