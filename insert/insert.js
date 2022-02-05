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
            db.collection("products").insertOne({ id: "3", name: "MI", price: "19999" }, function (err, result) {
                if (err)
                    throw err;
                else {
                    resp.send({ message: "added successfully" });
                }
            });
        }
    });
});
exports["default"] = insertRecord;
