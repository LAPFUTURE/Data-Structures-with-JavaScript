//这是一个Customer类
function Customer(name,movie){
    this.name = name;
    this.movie = movie;
}

function createCustomer(name,movie){
    return new Customer(name,movie);
}
module.exports = createCustomer;