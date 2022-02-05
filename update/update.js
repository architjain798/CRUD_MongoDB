"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var user = mongodb.MongoClient;
var updateRecord = express.Router().get("/", function (req, resp) {
    user.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority", function (err, connection) {
        if (err) {
            throw err;
        }
        else {
            var db = connection.db("mongodb");
            db.collection("products").updateOne({ id: parseInt(req.body.id) }, { $set: { name: req.body.name } }, function (err, resul) {
                if (err)
                    throw err;
                else {
                    resp.status(200).json({ message: "recored updated successfully" });
                }
            });
        }
    });
});
/* update hoga ek particular id dekar aur phir ek naame */
exports["default"] = updateRecord;
