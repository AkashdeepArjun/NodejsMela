
import http from "http"



const myserver = http.createServer((req,res)=>{

    const res1=()=>{
        res.writeHead(202,"Good",{"content-type":"text/html"})
        res.end("<h1>Home</h1>")
    }
    const res2=()=>{
        res.writeHead(204,"Good",{"content-type":"text/html"})
        res.end("<h1>About</h1>")
    }
    const res3 =()=>{
        res.writeHead(404,"Good",{"content-type":"text/html"})
        res.end("<h1>404 not found </h1>")
    }
    req.url==='/'?res1():req.url==='/about'?res2():res3()


})


myserver.listen(8000,()=>console.log("brum brum server started"))