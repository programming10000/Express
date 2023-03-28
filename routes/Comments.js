const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send({data:"Here Is yor comments"});
});
router.post("/",(req,res)=>{
    res.send({data:"User created"});
});

router.put("/",(req,res)=>{
    res.send({data:"User Updated"});
});

router.delete("/",(req,res)=>{
    res.send({data:"user deleted"});
});
module.exports=router;