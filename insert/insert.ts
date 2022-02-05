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
            db.collection("products").insertOne({id:"3",name:"MI",price:"19999"},(err,result)=>{
                if(err) throw err;
                else{
                    resp.send({message:"added successfully"});
                }
            })
        }
    }) 
})

export default insertRecord;
 