"use strict";
const express = require('express');
const router = express.Router();

//imports
const sources = require('../sources');
const getJson = require('../functions');

const finalFantasyArticles = [];

getJson(sources, 'a:contains("Final Fantasy")', finalFantasyArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(finalFantasyArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            
        }
        
    })

module.exports = router