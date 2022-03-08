import * as mongoose from "mongoose";
import * as express from "express";

import * as cors from "cors";
import * as bodyparser from "body-parser";

let app:any=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

mongoose.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority");

const employeeSchema=new mongoose.Schema({
    e_id:Number,
    e_name:String,
    e_sal:Number
})

const employees=mongoose.model("users",employeeSchema);



app.post("/employee",(req:any,res:any)=>{
    console.log(req.body.e_id);
    const newRecord=new employees({
        e_id:req.body.e_id,
        e_name:req.body.e_name,
        e_sal:req.body.e_sal
    })
    newRecord.save((err:any,result:any)=>{
        if(err) throw err;
        else{
            res.status(200).json({insert:"success"})
        }
    })
})



app.get("/allEmployee",(req:any,res:any)=>{
    employees.find({},(err:any,docs:any)=>{
        if(err) throw err;
        else{
            res.send(docs);
        }
    })
})


app.listen(8080,()=>{
    console.log("server started");
})