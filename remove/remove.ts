import * as express from "express";
import * as mongodb from "mongodb";

let user=mongodb.MongoClient;

let removeRecord=express.Router().get("/",(req:any,resp:any):any=>{
    user.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority",(err,connection)=>{
        if(err){
            throw err;
        }
        else{
            let db=connection.db("mongodb");
            db.collection("products").deleteOne({id:parseInt(req.body.id)},(err,res)=>{
                if(err) throw err;
                else{
                    resp.status(200).json({message:"recored deleted successfully"});
                }
            })
        }
    }) 
})

/* remove hoga ek particular id dekar */

export default removeRecord;
 