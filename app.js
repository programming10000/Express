const express=require('express');
const app=express();




app.get("/",(req,res) =>{
    res.send("user List");
  });

app.get("/animal",(req,res) =>{
    res.send("animal List");
  });
  
app.get("/students",(req,res) =>{
    res.send("students List");
  });
  
app.get("/cars",(req,res) =>{
    res.send("cars List");
  });

// const carRoute=require("./routes/car");
// app.use("/car",userRoute);

app.listen(3000,() =>{                       
    console.log('app listen on port 3000')
})