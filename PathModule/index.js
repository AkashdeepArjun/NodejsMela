import { log } from "console";
import path from "path"


console.log("basename:",path.basename("./package.json",".json"));

console.log("dirname",path.dirname("D:\\NodejsBasics\\PathModule\\index.js"))

console.log("extname",path.extname("D:\\NodejsBasics\\PathModule\\index.js"));


let workingpath=path.join("D:","NodejsTutes","basics");

console.log("working path: ",workingpath);

let rootdir=path.join("D:","NodejsTutes","basics","..");

let mainRoot=path.join("D:","NodejsTutes","basics","..","..");
console.log("root directory",rootdir);

console.log("main root:",mainRoot);


let normalized=path.normalize("D:\\/\/\NodejsBasics\\\\\PathModule\\index.js")

console.log("normalized path",normalized);


let parsedPath=path.parse("D:\\NodejsBasics\\PathModule\\index.js");

console.log("parsed path object is ",parsedPath);