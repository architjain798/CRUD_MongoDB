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
            db.collection("products").updateOne({id:parseInt(req.body.id)},{$set:{name:req.body.name}},(err,resul)=>{
                if(err) throw err;
                else{
                    resp.status(200).json({message:"recored updated successfully"});
                }
            })
        }
    }) 
})

/* update hoga ek particular id dekar aur phir ek naame */

export default updateRecord;
 