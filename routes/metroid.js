"use strict";
const express = require('express');
const router = express.Router();

//imports
const sources = require('../sources');
const getJson = require('../functions');

const metroidArticles = [];

getJson(sources, 'a:contains("Metroid"), a:contains("Samus")', metroidArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(metroidArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            throw new Error(err)
        }
        
    })

module.exports = router