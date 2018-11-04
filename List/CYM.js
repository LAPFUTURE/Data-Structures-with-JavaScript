//这是一个工具模块
let Customer = require('./Customer.js');

function displayList(list){
    for(list.front(); list.currPos() < list.length(); list.next()){
        if((list.getElement().hasOwnProperty("name")) && (list.getElement().hasOwnProperty("movie"))){
            console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
        }else{
            console.log(list.getElement());
        }
    }
}

function checkOut(name,movie,movieList,customerList){
    if(movieList.contains(movie)){
        let c = new Customer(name,movie);
        customerList.append(c);
        movieList.remove(movie);
    }else{
        console.log(movie + " is not available.");
    }
};
 
module.exports = {
    displayList:displayList,
    checkOut:checkOut
}
