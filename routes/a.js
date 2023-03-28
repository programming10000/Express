const express=require("express");
const routera=express.Router();

routera.get('/',(req,res)=>{
    res.send("Hi thier in a");
});
module.exports=routera;