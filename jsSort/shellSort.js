function shellSort(list){
    let length = list.length;
    let gaps = [5,3,1];
    for(let g = 0; g < gaps.length; g++ ){
        for(let i = gaps[g]; i < length; i++){
            let temp = list[i];
            let j;
            for(j = i; j >= gaps[g] && list[j-gaps[g]] > temp; j = j - gaps[g]){
                list[j] = list[j-gaps[g]];
            }
            list[j] = temp;
        }
    }
}

list = [1,3,5,7,9,2,4,6,8,10];
shellSort(list);
console.log(list);