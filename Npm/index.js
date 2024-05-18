import http from "http"

const testServer = (res)=>{

    res.writeHead(202,"Good",{"content-type":"text/html"})
    res.write("<h1>Hi Greetings  from server lmfao!!!!" )

}

const helperServer = http.createServer((req,res)=>{


    testServer(res)



})

helperServer.listen(8000,()=>console.log("brum...server started"))
