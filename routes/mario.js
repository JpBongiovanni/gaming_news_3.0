"use strict";
const express = require('express');
const router = express.Router();

//sources
const sources = require('../sources');
//scraper function
const getJson = require('../functions');
//empty article array
const marioArticles = [];

getJson(sources, 'a:contains("Mario"), a:contains("Super Mario")', marioArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(marioArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            throw new Error(err)
        }
        
    })

module.exports = router