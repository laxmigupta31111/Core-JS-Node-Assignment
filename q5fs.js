// 5. File System Module
// Create a file:
// student.txt
// Write student information and read it back.

const fs = require("fs");

const data = "hellooo bachhooo!!!!";

fs.writeFile("./student.txt", data, (err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("helll");
        
    }
})

fs.readFile("./student.txt",(err,data)=>{
if (err) {
    console.log(err);
    
} else {
    console.log(data.toString());
    
}
})