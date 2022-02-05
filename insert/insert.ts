import * as express from "express";
import * as mongodb from "mongodb";

let user=mongodb.MongoClient;

let insertRecord=express.Router().post("/",(req:any,resp:any):any=>{
    user.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority",(err,connection)=>{
        if(err){
            throw err;
        }
        else{
            let db=connection.db("mongodb");
            db.collection("products").insertOne({id:parseInt(req.body.id),name:req.body.name,price:parseInt(req.body.price)},(err,result)=>{
                if(err) throw err;
                else{
                    resp.send({message:"added successfully"});
                }
            })
        }
    }) 
})

/* insert hoga id , name , price dekar */

export default insertRecord;
 