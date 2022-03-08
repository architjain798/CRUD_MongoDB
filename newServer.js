"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
mongoose.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority");
var employeeSchema = new mongoose.Schema({
    e_id: Number,
    e_name: String,
    e_sal: Number
});
var employees = mongoose.model("users", employeeSchema);
app.post("/employee", function (req, res) {
    console.log(req.body.e_id);
    var newRecord = new employees({
        e_id: req.body.e_id,
        e_name: req.body.e_name,
        e_sal: req.body.e_sal
    });
    newRecord.save(function (err, result) {
        if (err)
            throw err;
        else {
            res.status(200).json({ insert: "success" });
        }
    });
});
app.get("/allEmployee", function (req, res) {
    employees.find({}, function (err, docs) {
        if (err)
            throw err;
        else {
            res.send(docs);
        }
    });
});
app.listen(8080, function () {
    console.log("server started");
});
