import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";

import getRecord from "./fetch/fetch";
import insertRecord from "./insert/insert";
import removeRecord from "./remove/remove";
import updateRecord from "./update/update";

let app:any=express();
app.use(cors());


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.use("/getrecords",getRecord);
app.use("/insertrecords",insertRecord);
app.use("/removerecords",removeRecord);
app.use("/updaterecord",updateRecord);

app.listen(8080,()=>{
    console.log("server started");
})


