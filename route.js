const express = require('express');
const Stud = require('./Model/employee');
const router = express.Router();

router.get("/view", async(req,res)=>{
    
    const emp = await Stud.find();
    res.send(emp);
});

module.exports = router;