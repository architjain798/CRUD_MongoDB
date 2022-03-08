"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var user = mongodb.MongoClient;
var getRecord = express.Router().get("/", function (req, resp) {
    user.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority", function (err, connection) {
        if (err) {
            console.log(err);
            //throw err;
        }
        else {
            var db = connection.db("mongodb");
            db.collection("products").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    resp.send(array);
                }
            });
        }
    });
});
exports["default"] = getRecord;
