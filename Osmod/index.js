import os, { freemem } from "os"

console.log("platform:",os.platform())
console.log("arch:",os.arch())
console.log("cpus",os.cpus())
console.log("released",os.release())

console.log("hostname",os.hostname())

console.log("HOME",os.homedir())

console.log("network interfaces:",os.networkInterfaces())

console.log("free space",os.freemem()/(1024*1024*1024))

console.log("total space",os.totalmem()/(1024*1024*1024))

