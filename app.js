// const name = "hassan";

// console.log(name);

// const { log } = require("console")
const fs = require("fs")

// fs.writeFileSync("./hassan.txt","mera naam hassan hai ...")


// fs.writeFileSync("./janu.txt","mera naam janu hai ...")

// let rtn =fs.readFileSync("./hassan.txt","utf-8")

// console.log("ye hai rtn -->",rtn);




// fs.writeFile("./kalem.txt","mera naam kaleem hai ..","utf-8",(err)=>{
// if (err) {
//     console.log("Error -->",err);
//     return
// }

// console.log("janu...");


// })



// fs.readFile("./kaleem.txt","utf-8",(err,data)=>{
//     if (err) {
//         console.log("ye error hai -->",err.message);
//     }
// console.log("ye data hai -->",data);


// })


const http=require("http")



const server=http.createServer((req,res)=>{
console.log("ye url hai ...",req.url);

if(req.url == "/"){
    res.end("home page ...")
}else if(req.url == "/dinner"){
    res.end("Dinner time...")
}else if(req.url == "/lunch"){
    res.end("Lunch time...")
}else if(req.url == "/breakFast"){
    res.end("Break Fast time...")
}else{
     res.statusCode = 404; 
    res.end('Resource not found');
}

    
})

server.listen("4321","127.0.0.1",()=>{
    console.log("listening to port no 4321 ...");
    
})


