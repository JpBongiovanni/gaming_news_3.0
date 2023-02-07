"use strict";
const express = require('express');
const router = express.Router();

//imports
const sources = require('../sources');
const getJson = require('../functions');

const wowArticles = [];

getJson(sources, 'a:contains("WoW"), a:contains("World of Warcraft")', wowArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(wowArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            
        }
        
    })

module.exports = router