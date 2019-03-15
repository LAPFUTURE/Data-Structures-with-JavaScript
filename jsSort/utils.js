function swap(list,i,j){
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

module.exports = {
    swap
}