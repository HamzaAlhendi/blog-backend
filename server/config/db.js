const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://hamza:QNwdbVv4DdzCjnGT@cluster0.bjztvxh.mongodb.net/blogDb").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})