import * as express from "express";
import * as mongodb from "mongodb";

let user=mongodb.MongoClient;

let getRecord=express.Router().get("/",(req:any,resp:any):any=>{
    user.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority",(err,connection)=>{
        if(err){
            console.log(err);
            
            //throw err;
        }
        else{
            let db=connection.db("mongodb");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    resp.send(array);
                }
            })
        }
    }) 
})

export default getRecord;
 