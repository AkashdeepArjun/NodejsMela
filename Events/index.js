import EventEmitter from "events"

const customEmitter = new EventEmitter()


//on whenever condition satisfies

//once =>when condition satisfied exactly once 

//emit call an event 


customEmitter.once('response',(name,id)=>{

    console.log(`user ${name} with id ${id} responded`);
})



customEmitter.emit("response","akashdeep wadhwa",1)
customEmitter.emit("response","gaurav jassal",8)
customEmitter.emit("response","arjun dev amar",15)