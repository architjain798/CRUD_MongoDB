"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var user = mongodb.MongoClient;
var removeRecord = express.Router().get("/", function (req, resp) {
    user.connect("mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/mongodb?retryWrites=true&w=majority", function (err, connection) {
        if (err) {
            throw err;
        }
        else {
            var db = connection.db("mongodb");
            db.collection("products").deleteOne({ id: parseInt(req.body.id) }, function (err, res) {
                if (err)
                    throw err;
                else {
                    resp.status(200).json({ message: "recored deleted successfully" });
                }
            });
        }
    });
});
/* remove hoga ek particular id dekar */
exports["default"] = removeRecord;
