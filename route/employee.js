const express = require('express');
const employee = require('../Model/employee');
const router = express.Router();

router.get("/",async(req,res)=>{
    try{
        const emp = await employee.find()
        res.json(emp)
    }
    catch(err){
        res.json(err)
    }
})

router.get("/view/:id",async(req,res)=>{
    try{
        const emp = await employee.findById(req.params.id)
        res.json(emp)
    }
    catch(err){
        res.json(err)
    }
})

router.patch("/update/:id",async(req,res)=>{
    try{
        const emp = await employee.findById(req.params.id)
        emp.name = req.body.name;
        updateResult = await emp.save()
        res.json(updateResult)
    }
    catch(err){
        res.json(err)
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const emp = await employee.findByIdAndRemove(req.params.id)
        res.json(emp)
    }
    catch(err){
        res.json(err)
    }
})

router.post("/add",async(req,res)=>{

   const  employeeData = new employee({
        name:req.body.name,
        position:req.body.position    

    })
    try{
        const emp = await employeeData.save()
        res.json(emp)    

    }catch(err){
        res.send(err);

    }
    
});

module.exports = router;