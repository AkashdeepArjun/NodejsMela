import fs from "fs";

    //BLOCKING CODES

// console.log("main process starts")

// alert("alert messages start");

// console.log("main process ends")



//NON BLOCKING CODE



// console.log("main process starts ");

// setTimeout(()=>{

//     alert("hello from akash ")

// },3000)

// console.log("main process ends ")


//without callback

// console.log("starts")

// let data =fs.readFileSync("./BTS/demo.txt")

// console.log(data.toString());

// console.log("ends");




//with callback

console.log("main thing starts")


fs.readFile("./BTS/demo.txt",(err,data)=>{

    err?console.log("error found\n",err):console.log(data.toString())


})

console.log("main thing ends ")

