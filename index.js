const express= require("express");

const app = express();

app.get("/", (req, res)=>{
    res.json({message: "hello world"});
});

app.listen(9000,()=>console.log("sever runing at port 9000"));

