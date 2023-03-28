const express=require("express");
const routerb=express.Router();

routerb.get('/',(req,res)=>{
    res.send("Hi thier in b");
});
module.exports=routerb;