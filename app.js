const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const userRoute=require("./routes/userroutes");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use("/",userRoute);

app.listen(process.env.PORT || 1234,()=>{
    console.log("Server Start...");
})