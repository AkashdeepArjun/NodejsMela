import * as fs from "fs";


// fs.mkdir("superpotato",issue=>{
//     if(issue) throw issue
//     console.log("directory created")

// })


fs.rmdir("superpotato",i=>{
    if(i) throw i
    console.log("removed directory success")

})


