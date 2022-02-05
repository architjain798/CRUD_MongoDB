"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var user = mongodb.MongoClient;
var insertRecord = express.Router().post("/", function (req, resp) {
    user.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority", function (err, connection) {
        if (err) {
            throw err;
        }
        else {
            var db = connection.db("mongodb");
            db.collection("products").insertOne({ id: parseInt(req.body.id), name: req.body.name, price: parseInt(req.body.price) }, function (err, result) {
                if (err)
                    throw err;
                else {
                    resp.send({ message: "added successfully" });
                }
            });
        }
    });
});
/* insert hoga id , name , price dekar */
exports["default"] = insertRecord;
