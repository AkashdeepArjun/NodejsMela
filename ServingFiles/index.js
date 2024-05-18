import http from 'http'

import fs  from 'fs'

const onHome =(res)=>{
    res.writeHead(208,"OK",{"content-type":"text/html"})
    fs.readFile("./ServingFiles/public/home.html",(error,data)=>{

    if(error) throw error;
        res.end(data);

    })
}
const onAbout=(res)=>{

    res.writeHead(202,"at about page",{"content-type":"text/html"})
    fs.readFile("./ServingFiles/public/about.html",(error,data)=>{

    if(error) throw error;
        res.end(data);

    })


}

const onElse=(res)=>{

    res.writeHead(404,"FAILED LOL",{"content-type":"text/html"})
    fs.readFile("./ServingFiles/public/error.html",(error,data)=>{

    if(error) throw error;
        res.end(data);

    })

}

const myserver = http.createServer((req,res)=>{

    

    req.url==="/"?onHome(res):req.url=='/about'?onAbout(res):onElse(res)

})


myserver.listen(8000,()=>

console.log("grrrr here we go again with starting server")

)