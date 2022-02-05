import * as express from "express";
import * as mongodb from "mongodb";

let user=mongodb.MongoClient;

let updateRecord=express.Router().get("/",(req:any,resp:any):any=>{
    user.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority",(err,connection)=>{
        if(err){
            throw err;
        }
        else{
            let db=connection.db("mongodb");
            db.collection("products").updateOne({id:2},{$set:{name:"archit"}},(err,resul)=>{
                if(err) throw err;
                else{
                    resp.status(200).json({message:"recored updated successfully"});
                }
            })
        }
    }) 
})

export default updateRecord;
 