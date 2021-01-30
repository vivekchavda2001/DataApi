const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

// mongoose.connect("mongodb://localhost:27017/emp",{useNewUrlParser:true,useUnifiedTopology:true}).then(
mongoose.connect("mongodb+srv://vivekchavda:123@cluster0.sbq38.mongodb.net/Employee?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(

    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server started....");
        })
    }

);