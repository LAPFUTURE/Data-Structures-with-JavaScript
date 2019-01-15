const readline = require("readline");
const fs = require("fs");

const List = require("./List.js");
const Customer = require("./Customer.js");
const CYM= require("./CYM.js");

let movieList = new List();
let customers = new List();

let moviesString = fs.readFileSync("movie.txt");
let movies = moviesString.toString().split("\r\n");
for(let i = 0,length = movies.length; i < length; i++){
    movies[i] = movies[i].trim();
    movieList.append(movies[i]);
}
CYM.displayList(movieList);

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "请输入> ",
});

input.prompt();

let name,movie;
console.log("\nname:你的名字:(例如：name:张三)");
console.log("movie:你喜欢的电影:(例如：movie:Godfather)");
console.log("输入end:结束输入.(例如：end:)");
input.on("line",(line)=>{
    let lineArray = line.trim().split(":");
    console.log(lineArray[0],lineArray[1]);
    switch( lineArray[0] ){
    case "name":
        name = lineArray[1];
        console.log("你的名字是" + lineArray[1]);
        input.prompt();
        break;
    case "movie":
        movie = lineArray[1];
        console.log("你喜欢的电影是:" + lineArray[1]);
        input.prompt();
        break;
    case "end":
        name = "";//将name置空，不进行下面的name&&movie语句块
        console.log("输入已结束.See you again.");
        input.close();
        break;
    default:
        console.log("\nname:你的名字:(例如：name:张三)");
        console.log("movie:你喜欢的电影:(例如：movie:Godfather)");
        console.log("输入end:结束输入.(例如：end:)");
        input.prompt();
    }
    if(name && movie){
        console.log(movieList.contains(movie));
        CYM.checkOut(name,movie,movieList,customers);
        console.log("\ncustomers:");
        CYM.displayList(customers);
        console.log("\nmovieList:");
        CYM.displayList(movieList);
    }
});