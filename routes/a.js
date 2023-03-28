const express=require("express");
const routera=express.Router();

routera.get('/',(req,res)=>{
    res.send("Hi thier in a");
});
routera.get('/a',(req,res)=>{
    res.send("Hi");
});
module.exports=routera;