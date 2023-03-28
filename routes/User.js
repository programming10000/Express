const express=require("express");
const router=express.Router();


router.get("/",(req,res)=>{
    res.send({data:"Here Is yor data"});
});
module.exports=router;