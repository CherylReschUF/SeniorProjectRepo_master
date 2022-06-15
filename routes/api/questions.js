//const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Question = require("../../models/Question")

const numQuestions = 10;

router.get("/get", (req, res) => {
    Question.find({}, (err, docs) => {
        const qs = [];
        const indexes = [];
        //TODO: fix length
        while (indexes.length < numQuestions) {
            let randomNumber = Math.floor(Math.random() * docs.length);
            if (!indexes.includes(randomNumber)) {
              qs.push(docs[randomNumber]);
              indexes.push(randomNumber);
            }
          }
          res.send(qs);
    })
})

module.exports = router;