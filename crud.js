const mongoose=require("mongoose");
const{ConnectDb}=require("./db.js");
const { type } = require("node:os");
const studSchema=mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    course:{
type:String,
enum:["Data Analyst","Computer Science","Bussiness Management","It","Data Science"],
required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
        fees:{
            type:Number,
            min:12800,
            max:40000,
            required:true
        },
        isActive:{
            type:Boolean,
            required:true
        }
});
const StudModel=mongoose.model("student",studSchema);
ConnectDb();
async function insertStud() {
    try {
        const data=await StudModel.insertMany([{
            id:102,
            name:"Rahul",
            email:"rahulChaurasiya420@gmail.com",
            course:"Data Analyst",
            age:24,
            city:"Kanpur",
            fees:32000,
            isActive:false
        },{
           id:103,
            name:"Ashraf",
            email:"ashrafdalal67@gmail.com",
            course:"It",
            age:21,
            city:"Chennai",
            fees:32000,
            isActive:true  
        },{
           id:104,
            name:"Pranay",
            email:"pranaywawalkar802@gmail.com",
            course:"Data Science",
            age:27,
            city:"Nashik",
            fees:25000,
            isActive:true  
        }]);
        // const result=await data.save();
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
// insertStud()
async function displayStud() {
    try {
        const resut=await StudModel.find();
        console.log(resut);
        
    } catch (error) {
        console.log(error);
        
    }
}
// displayStud()

async function updateStud() {
    try {
        await StudModel.updateOne({id:102},{$set:{fees:18000}})
        console.log("Data Updated...");
        
    } catch (error) {
        console.log(error);
        
    }
}
// updateStud()
async function deleteStud() {
    try {
        await StudModel.deleteMany({city:"Chennai"});
        console.log("Data Deleted....");
        
    } catch (error) {
        console.log(error);
        
    }
}
deleteStud()