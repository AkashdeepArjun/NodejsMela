import http from 'http'

const personal_server=http.createServer((req,res)=>{


    console.log("request found",req)
    // res.setHeader("content-type","text/html")
    res.writeHead(202,"okay stat",{"content-type":"text/html"})
    res.write("<h1>request is being processed</h1>")

})


personal_server.listen(8080,()=>console.log("server is up"))