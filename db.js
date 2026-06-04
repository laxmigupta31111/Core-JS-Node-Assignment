const mongoose=require("mongoose")

const ConnectDb=()=>{
    
    mongoose.connect("mongodb://localhost:27017/Student_details")
    .then(() => {
        console.log("Connected....");
        
    }).catch((err) => {
        console.log(err);
        
    });
};
module.exports= {ConnectDb};