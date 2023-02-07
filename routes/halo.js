"use strict";
const express = require('express');
const router = express.Router();

//imports
const sources = require('../sources');
const getJson = require('../functions');

const haloArticles = [];

getJson(sources, 'a:contains("Halo"), a:contains("Master Chief")', haloArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(haloArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            
        }
        
    })

module.exports = router