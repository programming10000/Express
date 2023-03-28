const express=require('express')
const router=express.Router()

//then here we can write  a bunch of roures here and export it
// and use it in the app.js file
router.get("/",(req,res) =>{
    res.send("user List")
})
router.get("/new",(req,res) =>{
    res.send("user new form")
})
module.export=router