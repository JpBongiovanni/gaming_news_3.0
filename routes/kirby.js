"use strict";
const express = require('express');
const router = express.Router();

//imports
const sources = require('../sources');
const getJson = require('../functions');

const kirbyArticles = [];

getJson(sources, 'a:contains("Kirby")', kirbyArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(kirbyArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            
        }
        
    })

module.exports = router