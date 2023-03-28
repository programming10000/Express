const express=require('express');
const app=express();
const port=6969;

//for feching data dynamically using express server
const userRoute=require("./routes/User");
app.use("/User",userRoute );
const commentsRoute=require("./routes/comments");
app.use("/Comments",commentsRoute );


// app.get("/users",(req,res)=>{
//     res.send({data:"Here Is yor data"});
// });

// app.post("/users",(req,res)=>{
//     res.send({data:"User created"});
// });

// app.put("/users",(req,res)=>{
//     res.send({data:"User Updated"});
// });

// app.delete("/users",(req,res)=>{
//     res.send({data:"user deleted"});
// });

app.listen(port,()=>{
    console.log("server running");
});


