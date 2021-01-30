const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/employee.js');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var uri = "mongodb+srv://vivekchavda:123@cluster0.sbq38.mongodb.net/Employee?retryWrites=true&w=majority";
app.use(express.json());
// mongoose.connect("mongodb://localhost:27017/emp",{useNewUrlParser:true,useUnifiedTopology:true}).then(
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(

    ()=>{
        
        app.use("/",route);
        app.listen(process.env.PORT || 3000,(err)=>{
	        if(err)
	        {
	        	console.log(err);
	        }else{
	        	console.log('Server started')
	    	}
      })
    }

);