"use strict";
const express = require('express');
const router = express.Router();

//imports
const sources = require('../sources');
const getJson = require('../functions');

const starFoxArticles = [];

getJson(sources, 'a:contains("Star Fox")', starFoxArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(starFoxArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            
        }
        
    })

module.exports = router