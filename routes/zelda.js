"use strict";
const express = require('express');
const router = express.Router();

//imports
const sources = require('../sources');
const getJson = require('../functions');

const zeldaArticles = [];

getJson(sources, 'a:contains("Zelda"), a:contains("Ocarina of Time', zeldaArticles);

router
    .get("/", (req, res) => {
        try{
            res.json(zeldaArticles)
        } catch (err) {
            res.json('Something went wrong: ' + err)
            throw new Error(err)
        }
        
    })

module.exports = router