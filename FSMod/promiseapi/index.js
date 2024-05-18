import { log } from 'console';
import * as fs from 'fs/promises'



const createDirectory = async(directory)=>{

    try{
        await fs.mkdir(`./${directory}`,{recursive:true});
        console.log("created folder successfully");
    }catch(error){
        console.log(error);
    }


}



const delDir= (name,seconds)=>{

    setTimeout(()=>{

        try {
             fs.rmdir(name).then((p)=>{console.log("remove success");});
        } catch (error) {
            
        }


    },seconds*1000)

}


const readDir=async(dirname)=>{
    try {
    const files=await fs.readdir(dirname,{recursive:true});
    for(let file of files){
        console.log(file);
    }

    } catch (error) {
        console.log(error);
    }

    

}


const removeDirecctory =async(namedir)=>{

    try {

        fs.rmdir(namedir).then((p)=>{console.log("success removal")})
        
    } catch (error) {
        console.log("error aa gya",error);
    }


}

// createDirectory("logs");
const writeLogs=async(filename)=>{

    try {
        
        await fs.writeFile(`./logs/${filename}`,"Lol its overridden\n");
    } catch (error) {
        console.log(error)
    }


}


const readFile=async(filename)=>{

try {

    const data =await fs.readFile(filename,'utf-8');
    console.log(data);
    
} catch (ex) {
    
    console.log(ex);

}


}

// readFile('./logs/README.md');



const backupFile =async(filename)=>{

    try {
        await fs.copyFile(`./logs/${filename}`,`./backups/${filename}`)
    } catch (error) {
        console.log(error);
    }
}


const getInfo = async(filename)=>{


    try {
        const info = await fs.stat(filename);
        return  info;
    } catch (stupid) {
        console.log(stupid);
        return null;
    }
}


const f=getInfo(`./backups/potato.txt`);
f.then(p=>{
console.log(p.isFile());

})
console.log("lets wait here ");

